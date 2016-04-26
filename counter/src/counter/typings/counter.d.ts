declare namespace counter {
    // Base
    interface IState {
        value: number,
    }
    interface IActions {
        addOne: () => any;
        reduceOne: () => any;
        addOneAsync: () => ReduxThunk.ThunkInterface;
        addOneIfOdd: () => ReduxThunk.ThunkInterface;
    }

    // Tree
    interface IReducer {
        counter: IState,
    }

    // Extend
    interface IProps extends IState {
        actions: IActions,
    }
}


declare module "counter" {
    export = counter;
}

