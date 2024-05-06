// This file create pre-defined react-redux hooks that know the right types for our state/dispatch

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// We will define pre-typed versions of useDispatch and useSelector

import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector