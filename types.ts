import React from 'react';

export enum WaitlistStatus {
    IDLE = 'IDLE',
    SUBMITTING = 'SUBMITTING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface WaitlistFormData {
    name: string;
    email: string;
    role: string; // Business Type
    website?: string;
    revenue: string;
    country: string;
    challenges: string[];
    consent: boolean;
}

export interface ReferralState {
    position: number;
    referrals: number;
    milestoneTarget: number;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    badge?: string;
    tooltip?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ShowcaseItem {
    id: string;
    category: 'Social' | 'Email' | 'Ad' | 'Copy';
    content: React.ReactNode;
    title: string;
}