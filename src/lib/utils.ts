import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Performance optimized logger
 * Only logs in development mode
 */
export const logger = {
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`ℹ️ ${message}`, data || '');
    }
  },
  
  error: (message: string, error?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`❌ ${message}`, error || '');
    }
    // In production, you might want to send to error tracking service
  },
  
  warn: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`⚠️ ${message}`, data || '');
    }
  },
  
  success: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ ${message}`, data || '');
    }
  },
  
  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MODE === 'true') {
      console.debug(`🔍 ${message}`, data || '');
    }
  }
};

/**
 * Performance utilities
 */
export const perf = {
  // Debounce function for search inputs
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for scroll events
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Measure execution time
  measureTime: async <T>(
    label: string,
    fn: () => Promise<T> | T
  ): Promise<T> => {
    const start = typeof window !== 'undefined' && window.performance?.now ? window.performance.now() : Date.now();
    const result = await fn();
    const end = typeof window !== 'undefined' && window.performance?.now ? window.performance.now() : Date.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`⏱️ ${label}: ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  }
};

/**
 * Memory optimized storage helpers
 */
export const storage = {
  get: (key: string) => {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: (key: string, value: any) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or disabled
    }
  },

  remove: (key: string) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Storage disabled
    }
  }
};

/**
 * API helper with error handling
 */
export const api = {
  get: async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      logger.error(`API GET error: ${url}`, error);
      throw error;
    }
  },

  post: async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      logger.error(`API POST error: ${url}`, error);
      throw error;
    }
  }
};
