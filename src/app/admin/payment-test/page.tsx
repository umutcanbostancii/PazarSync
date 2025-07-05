"use client";

import { useState } from 'react';
import { PaymentTestFramework, PaymentTestConfig, TestResult } from '@/lib/test-framework';

export default function PaymentTestPage() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [analysis, setAnalysis] = useState<string>('');
  const [success, setSuccess] = useState<boolean | null>(null);

  const testConfig: PaymentTestConfig = {
    testCardNumber: '5528790000000008',
    testCVC: '123',
    testMonth: '12',
    testYear: '2030',
    testName: 'John Doe',
    planId: 'pro'
  };

  const runTests = async () => {
    setIsRunning(true);
    setResults([]);
    setAnalysis('');
    setSuccess(null);

    try {
      const framework = new PaymentTestFramework(testConfig);
      const testResults = await framework.runAllTests();
      
      setResults(testResults.results);
      setSuccess(testResults.success);
      setAnalysis(framework.analyzeResults());
    } catch (error) {
      console.error('Test çalıştırma hatası:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      default: return '🔵';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="container-wide py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🧪 İyzico Ödeme Test Merkezi</h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Test Konfigürasyonu:</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><strong>Kart:</strong> {testConfig.testCardNumber}</div>
            <div><strong>CVC:</strong> {testConfig.testCVC}</div>
            <div><strong>Tarih:</strong> {testConfig.testMonth}/{testConfig.testYear}</div>
            <div><strong>Plan:</strong> {testConfig.planId}</div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={runTests}
            disabled={isRunning}
            className={`px-6 py-3 rounded-lg font-semibold ${
              isRunning
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isRunning ? '🔄 Test Çalışıyor...' : '🚀 Testleri Başlat'}
          </button>

          {success !== null && (
            <div className={`px-4 py-3 rounded-lg font-semibold ${
              success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {success ? '✅ TÜM TESTLER BAŞARILI' : '❌ TESTLER BAŞARISIZ'}
            </div>
          )}
        </div>

        {analysis && (
          <div className="bg-gray-50 border rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">📊 Analiz Raporu:</h3>
            <pre className="whitespace-pre-wrap text-sm">{analysis}</pre>
          </div>
        )}

        {results.length > 0 && (
          <div className="bg-white border rounded-lg overflow-hidden">
            <h3 className="bg-gray-50 px-4 py-3 font-semibold border-b">Test Sonuçları:</h3>
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 border-b border-gray-100 ${
                    result.status === 'error' ? 'bg-red-50' : 
                    result.status === 'warning' ? 'bg-yellow-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span>{getStatusIcon(result.status)}</span>
                        <span className="font-medium">{result.step}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(result.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className={`mt-1 ${getStatusColor(result.status)}`}>
                        {result.message}
                      </p>
                      {result.data && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-xs text-gray-600">
                            Detayları Göster
                          </summary>
                          <pre className="mt-1 text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                            {JSON.stringify(result.data, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <h4 className="font-semibold mb-2">Test Kapsamı:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ Kullanıcı authentication kontrolü</li>
            <li>✅ Plan konfigürasyonu doğrulama</li>
            <li>✅ Form validation testleri</li>
            <li>✅ İyzico API entegrasyonu</li>
            <li>✅ Detaylı hata analizi</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 