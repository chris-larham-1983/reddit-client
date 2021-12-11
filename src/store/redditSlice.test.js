import redditReducer, {
    selectPosts,
    selectFilteredPosts,
    selectSearchTerm,
    selectSelectedSubreddit,
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed,
} from './redditSlice';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('redditSlice state', () => {
   it('has an initial state with typeof object', () => {
       const previousState = undefined;
       expect(typeof redditReducer(previousState, {})).toEqual('object');
   });

   describe('redditReducer', () => {
       it('returns the initial state if no state modifications have been made', () => {
          const previousState = undefined;
          const expectedState = {
              posts: [],
              error: false,
              isLoading: false,
              searchTerm: '',
              selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
          };
          const resultState = redditReducer(previousState, {});
          expect(resultState).toEqual(expectedState);
       });

       describe('"setPosts" action', () => {
          it('sets the "posts" property of redditSlice state to an array of posts', () => {
             const previousState = {
                 posts: [],
                 error: false,
                 isLoading: false,
                 searchTerm: '',
                 selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
             };
             const expectedState = {
                 posts: ['an', 'array', 'of', 'posts'],
                 error: false,
                 isLoading: false,
                 searchTerm: '',
                 selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
             };
             const resultState = redditReducer(previousState, setPosts(['an', 'array', 'of', 'posts']));
             expect(resultState).toEqual(expectedState);
          });
       });

       describe('"startGetPosts" action', () => {
           it('sets the "isLoading" property of redditSlice state to "true"', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: false,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, startGetPosts());
               expect(resultState.isLoading).toBe(true);
           });
       });
        /* the following line (#26) in redditSlice.js must be commented out in order for the following 'describe' block
           to work correctly:
           document.getElementsByTagName("H2")[0].scrollIntoView();
         */
       describe('"getPostsSuccess" action', () => {
           it('sets the "isLoading" property of redditSlice state to "false"', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, getPostsSuccess([]));
               expect(resultState.isLoading).toBe(false);
           });
           it('populates the "posts" property of redditSlice state with an array of posts', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, getPostsSuccess(['an', 'array', 'of', 'posts']));
               expect(resultState.posts.length).toEqual(4);
           });
       });

       describe('"getPostsFailed" action', () => {
            it('sets the "isLoading" property of redditSlice state to "false"', () => {
                const previousState = {
                    posts: [],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, getPostsFailed());
                expect(resultState.isLoading).toBe(false);
            });
            it('sets the "error" property of redditSlice state to "true"', () => {
                const previousState = {
                    posts: [],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, getPostsFailed());
                expect(resultState.error).toBe(true);
            });
       });

       describe('"setSearchTerm" action', () => {
           it('sets the "searchTerm" property of redditSlice state', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, setSearchTerm( "New Search Term"));
               expect(resultState.searchTerm).toMatch("New Search Term");
           });
       });

       describe('"setSelectedSubreddit" action', () => {
           it('sets the "selectedSubreddit" property of redditSlice state', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, setSelectedSubreddit("/r/userSelectedSubreddit/"));
               expect(resultState.selectedSubreddit).toMatch("/r/userSelectedSubreddit/");
           });
           it('sets the "searchTerm" property of redditSlice state to an empty string', () => {
               const previousState = {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: 'User-entered search term',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               expect(previousState.searchTerm).toMatch('User-entered search term');
               const resultState = redditReducer(previousState, setSelectedSubreddit("/r/userSelectedSubreddit/"));
               expect(resultState.searchTerm).toMatch('');
           });
       });

       describe('"toggleShowingComments" action', () => {
            it('toggles between showing and hiding comments for a post', () => {
                const previousState = {
                    posts: [{
                        name: 'an',
                        showingComments: false,
                    }],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, toggleShowingComments(0));
                expect(resultState.posts[0].showingComments).toBe(true);
            });
       });

       describe('"startGetComments" action', () => {
            it('sets the "loadingComments" and "error" properties of the selected post to "true" and "false", respectively', () => {
                const previousState = {
                    posts: [{
                        name: 'an',
                        showingComments: false,
                        loadingComments: false,
                        error: true,
                    }],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, startGetComments(0));
                expect(resultState.posts[0].loadingComments).toBe(true);
                expect(resultState.posts[0].error).toEqual(false);
            });
       });

       describe('"getCommentsSuccess" action', () => {
            it('sets the "loadingComments" property of the selected post to "false"', () => {
                const previousState = {
                    posts: [{
                        name: 'an',
                        comments: [],
                        showingComments: false,
                        loadingComments: true,
                        error: false,
                    }],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, getCommentsSuccess({
                    index: 0,
                    comments: ['an', 'array', 'of', 'comments'],
                }));
                expect(resultState.posts[0].loadingComments).toBe(false);
            });
            it('populates the "comments" array property of the selected post', () => {
                const previousState = {
                    posts: [{
                        name: 'an',
                        comments: [],
                        showingComments: false,
                        loadingComments: true,
                        error: false,
                    }],
                    error: false,
                    isLoading: true,
                    searchTerm: '',
                    selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
                };
                const resultState = redditReducer(previousState, getCommentsSuccess({
                    index: 0,
                    comments: ['an', 'array', 'of', 'comments'],
                }));
                expect(resultState.posts[0].comments.length).toEqual(4);
            });
       });

       describe('"getCommentsFailed" action', () => {
           it('sets the "loadingComments" and "error" properties of the selected post to "false" and "true", respectively', () => {
               const previousState = {
                   posts: [{
                       name: 'an',
                       comments: [],
                       showingComments: false,
                       loadingComments: true,
                       error: false,
                   }],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               };
               const resultState = redditReducer(previousState, getCommentsFailed(0));
               expect(resultState.posts[0].loadingComments).toBe(false);
               expect(resultState.posts[0].error).toBe(true);
           });
       });
   });
   describe('"selectSelectedSubreddit" selector', () => {
       it('returns the current subreddit', () => {
           const testState1 = {
               reddit: {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               }
           };
           const testState2 = {
               reddit: {
                   posts: [],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Soccer/',
               }
           };
           expect(selectSelectedSubreddit(testState1)).toMatch('/r/Coding/');
           expect(selectSelectedSubreddit(testState2)).toMatch('/r/Soccer/');
       });
   });
   describe('"selectPosts" selector', () => {
       it('returns the posts currently held in state', () => {
           const testState1 = {
               reddit: {
                   posts: [{ title: 'an' }, { title: 'array' }],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               }
           };
           const testState2 = {
               reddit: {
                   posts: [{ title: 'of' }, { title: 'posts' }],
                   error: false,
                   isLoading: true,
                   searchTerm: '',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Soccer/',
               }
           };
           expect(selectPosts(testState1)[0].title).toMatch('an');
           expect(selectPosts(testState1)[1].title).toMatch('array');
           expect(selectPosts(testState2)[0].title).toMatch('of');
           expect(selectPosts(testState2)[1].title).toMatch('posts');
       });
   });
   describe('"selectSearchTerm" selector', () => {
       it('returns the User-entered search term currently held in state', () => {
           const testState1 = {
               reddit: {
                   posts: [{ title: 'an' }, { title: 'array' }],
                   error: false,
                   isLoading: true,
                   searchTerm: 'React',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               }
           };
           const testState2 = {
               reddit: {
                   posts: [{ title: 'of' }, { title: 'posts' }],
                   error: false,
                   isLoading: true,
                   searchTerm: 'SQL',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Soccer/',
               }
           };
           expect(selectSearchTerm(testState1)).toMatch('React');
           expect(selectSearchTerm(testState1)).not.toMatch('ReactJS');
           expect(selectSearchTerm(testState2)).toMatch('SQL');
           expect(selectSearchTerm(testState2)).not.toMatch('MySQL');
       });
   });
   describe('"selectFilteredPosts" selector', () => {
       it('returns an array of posts held in state whose title includes the User-defined search term', () => {
           const store = mockStore({
               reddit: {
                   posts: [{ title: 'HTML' }, { title: 'CSS' }, { title: 'JavaScript' }, { title: 'SQL' }],
                   error: false,
                   isLoading: true,
                   searchTerm: 'SQL',
                   selectedSubreddit: localStorage.getItem("selectedSubreddit") || '/r/Coding/',
               }
           });
           expect(selectFilteredPosts(store.getState()).length).toBe(1);
           expect(selectFilteredPosts(store.getState())[0].title).toMatch('SQL');
           expect(selectFilteredPosts(store.getState())[0].title).not.toMatch('HTML');
           expect(selectFilteredPosts(store.getState())[0].title).not.toMatch('CSS');
           expect(selectFilteredPosts(store.getState())[0].title).not.toMatch('JavaScript');
       });
   });
});