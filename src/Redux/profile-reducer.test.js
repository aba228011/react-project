import profileReducer, {addPostActionCreator} from "./profile-reducer";

test('check length, last message. Test profileReducer', () => {
    //1.data (данные)
    const state = {
        posts: [
            {id: 1, message: 'My name is Kong! I hate Space', likesCount: 13, dislikesCount: 3},
            {id: 2, message: 'It`s cool! I love Space', likesCount: 39, dislikesCount: 0},
            {id: 3, message: 'I know what is Erbakyt lox', likesCount: 999, dislikesCount: 0}
        ]
    }
    const action = addPostActionCreator("New message");

    //2.action (действия)
    const newState = profileReducer(state, action);


    //3.expectation (ожидаемый результат)
    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].message).toBe("New message");
});
