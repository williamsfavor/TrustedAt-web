import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export interface Policy {
  id: string;
  legalType: string;
  title: string;
  content: string;
  summary: string;
  status: string;
  version: string;
  effectiveDate: string;
  expiryDate: string | null;
  lastReviewedDate: string | null;
  nextReviewDate: string | null;
  reviewCycle: string;
  metadata: Record<string, any>;
  changeLog: any[];
  createdBy: string;
  updatedBy: string;
  approvedBy: string;
  approvalDate: string;
  rejectionReason: string | null;
  notes: string | null;
  isActive: boolean;
  requiresUserConsent: boolean;
  consentVersion: string;
  tags: string[];
  attachments: any[];
  creator: any;
  updater: any;
  approver: any;
  createdAt: string;
  updatedAt: string;
}

// type Policies = Record<string, Policy | null>;

interface LegalState {
  policies: Policy[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  hasFetched: boolean;
}

const initialState: LegalState = {
  policies: [],
  status: 'idle',
  error: null,
  hasFetched: false,
};

export const fetchPolicies = createAsyncThunk('legal/fetchPolicies', async () => {
  const response = await fetch('https://straight-libbey-ekaleinvestmentsltd-bc2eddbe.koyeb.app/public/legal-documents');
  if (!response.ok) {
    throw new Error('Failed to fetch legal documents');
  }
  return response.json();
});

const legalSlice = createSlice({
  name: 'legal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.policies = action.payload['documents'] as Policy[];
        console.log(action.payload)
        state.hasFetched = true;
      })
      .addCase(fetchPolicies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
        state.hasFetched = true; // Mark as fetched even on error to prevent retry loops
      });
  },
});

export default legalSlice.reducer;