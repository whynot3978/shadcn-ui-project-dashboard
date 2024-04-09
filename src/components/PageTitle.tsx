import { cn } from '@/lib/utils';
import React from 'react';

export type Props = {
    title: string;
    className?: string;
}

export function PageTitle ({title, className}: Props) {
    return (
        <h1 className={cn('text-2xl font-semibold', className)}>
            {title}
        </h1>
    )
}