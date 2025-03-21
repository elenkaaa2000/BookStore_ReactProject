import { useState } from 'react'
export default function usePersistedState(stateKey, initialState) {
    const [state, setState] = useState(() => {
        const persistedStateJSON = localStorage.getItem(stateKey);
        if (!persistedStateJSON) {
            return typeof initialState == 'function'
                ?
                initialState()
                : initialState
        }

        const persistedState = JSON.parse(persistedStateJSON);

        return persistedState;
    });

    const setPersistedState = (input) => {
        const data = typeof input == 'function'
            ? input(state)
            : input;

        const persistedData = JSON.stringify(authData);

        localStorage.setItem('auth', persistedData);

        setState(authData)
    };

    return [
        state,
        setPersistedState
    ]
}