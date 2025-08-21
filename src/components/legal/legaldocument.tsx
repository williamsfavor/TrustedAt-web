import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '@/store/store';
import { fetchPolicies } from '@/store/legal/legalSlice';

import dayjs from "dayjs";
interface LegalDocumentProps {
  policyKey: string;
}

export default function LegalDocument({ policyKey }: LegalDocumentProps) {
  const dispatch: AppDispatch = useDispatch();
  const { policies, status } = useSelector((state: RootState) => state.legal);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    if (status === 'idle' || (status === 'failed' && retryCount < maxRetries)) {
      dispatch(fetchPolicies());
      console.log(policies);
    }
  }, [dispatch, status, retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    dispatch(fetchPolicies());
  };

  const policy = policies.find((item) => item.legalType === policyKey);
  const content = policy?.content || '';
  const title = policy?.title || '...';
  const effectiveDate = policy?.effectiveDate ? dayjs(policy.effectiveDate).format("MMM YYYY ddd") : 'Unknown';
  console.log(effectiveDate)

  return (
    <div className="w-full flex flex-col">
      {status === 'loading' && (
        <>
          <div className="loading w-[200px] mt-6 h-[28px] rounded-full"></div>
        </>
      )}
      {status === 'succeeded' && (
        <h1 className="text-2xl md:text-[2.5em] font-extrabold text-gray-800">{title}</h1>
      )}

      {status === 'loading' && (
        <>
          <div className="loading w-[100px] mt-6 h-[20px] rounded-full"></div>
        </>
      )}
      {status === 'succeeded' && (
        <p className="text-gray-700 py-2">Effective {effectiveDate}</p>
      )}
      <div className="mt-5 markdown">
        {status === 'loading' && (
          <div className="w-full min-h-[40vh] loadingLow p-4 py-0 pb-8 rounded-md">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div
                key={idx}
                className="loading w-full mt-5 h-[20px] rounded-full"
                style={{
                  width: `${Math.floor(Math.random() * 40) + 40}%`,
                }}
              ></div>
            ))}
          </div>
        )}
        {status === 'failed' && (
          <div className="flex flex-col items-center justify-center py-10">
            <svg
              className="w-16 h-16 text-red-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
            </svg>
            <h2 className="text-xl font-semibold text-red-600 mb-2">Failed to load policy</h2>
            <p className="text-gray-600 mb-4">
              {retryCount < maxRetries
                ? `Retrying... Attempt ${retryCount + 1} of ${maxRetries}`
                : 'Please try again later or contact support if the problem persists.'}
            </p>
            {retryCount >= maxRetries && (
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Retry
              </button>
            )}
          </div>
        )}
        {status === 'succeeded' && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  );
}