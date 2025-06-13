import { useEffect, useLayoutEffect } from 'react';

// Use useLayoutEffect on client, useEffect on server to avoid hydration warnings
export const useSSRSafeEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  useSSRSafeEffect(effect, deps);
}