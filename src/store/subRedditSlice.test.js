import subredditReducer, { startGetSubreddits, getSubredditsSuccess, getSubredditsFailed, selectSubreddits } from './subRedditSlice';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('subRedditSlice state', () => {
    it('has an initial state with typeof object', () => {
        const previousState = undefined;
        expect(typeof subredditReducer(previousState, {})).toEqual('object');
    });

    describe('subredditReducer', () => {
        it('returns the initial state if no state modifications have been made', () => {
            const previousState = undefined;
            const expectedState = {
                subreddits: [],
                error: false,
                isLoading: false,
            };
            const resultState = subredditReducer(previousState, {});
            expect(resultState).toEqual(expectedState);
        });

        describe('"startGetSubreddits" action', () => {
            it('sets the "isLoading" property of subRedditSlice state to true', () => {
                const previousState = {
                    subreddits: [],
                    error: false,
                    isLoading: false,
                };
                const expectedState = {
                    subreddits: [],
                    error: false,
                    isLoading: true,
                };
                const resultState = subredditReducer(previousState, startGetSubreddits());
                expect(resultState).toEqual(expectedState);
            });
            it('sets the "error" property of subRedditSlice state to false', () => {
                const previousState = {
                    subreddits: [],
                    error: true,
                    isLoading: false,
                };
                const expectedState = {
                    subreddits: [],
                    error: false,
                    isLoading: true,
                };
                const resultState = subredditReducer(previousState, startGetSubreddits());
                expect(resultState).toEqual(expectedState);
            });
        });

        describe('"getSubredditsSuccess" action', () => {
            it('sets the "isLoading" property of subRedditSlice state to false', () => {
                const previousState = {
                    subreddits: [],
                    error: false,
                    isLoading: true,
                };
                const expectedState = {
                    subreddits: ['an', 'array', 'of', 'subreddits'],
                    error: false,
                    isLoading: false,
                };
                const resultState = subredditReducer(previousState, getSubredditsSuccess(['an', 'array', 'of', 'subreddits']));
                expect(resultState).toEqual(expectedState);
            });
            it('populates the "subreddits" array within subRedditSlice state', () => {
                const previousState = {
                    subreddits: [],
                    error: false,
                    isLoading: true,
                };
                const expectedState = {
                    subreddits: ['an', 'array', 'of', 'interesting', 'and', 'diverse', 'subreddits'],
                    error: false,
                    isLoading: false,
                };
                const resultState = subredditReducer(previousState, getSubredditsSuccess(['an', 'array', 'of', 'interesting', 'and', 'diverse', 'subreddits']));
                expect(resultState).toEqual(expectedState);
                expect(resultState.subreddits.length).toEqual(7);
            });
        });

        describe('"getSubredditsFailed" action', () => {
            it('sets the "isLoading" property of subRedditSlice state to "false"', () => {
                const previousState = {
                    subreddits: [],
                    error: false,
                    isLoading: true,
                };
                const expectedState = {
                    subreddits: [],
                    error: true,
                    isLoading: false,
                };
                const resultState = subredditReducer(previousState, getSubredditsFailed());
                expect(resultState).toEqual(expectedState);
            });
            it('sets the "error" property of subRedditSlice state to "true"', () => {
                const previousState = {
                    subreddits: ['error', 'property', 'changes'],
                    error: false,
                    isLoading: true,
                };
                const expectedState = {
                    subreddits: ['error', 'property', 'changes'],
                    error: true,
                    isLoading: false,
                };
                const resultState = subredditReducer(previousState, getSubredditsFailed());
                expect(resultState).toEqual(expectedState);
                expect(resultState.error).toBe(true);
            });
        });
    });
    describe('"selectSubreddits" selector', () => {
        it('returns the array of subreddits held in subRedditSlice state', () => {
            const store = mockStore({
                subreddits: {
                    subreddits: ['an', 'interesting', 'and', 'diverse', 'array', 'of', 'subreddits'],
                    error: false,
                    isLoading: false,
                }
            });
            expect(selectSubreddits(store.getState()).length).toBe(7);
            expect(selectSubreddits(store.getState())[0]).toMatch('an');
            expect(selectSubreddits(store.getState())[6]).toMatch('subreddits');
        });
    });
});