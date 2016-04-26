/// <reference path="./../../counter/typings/counter.d.ts"/>


declare module "App" {
    import * as Counter from "counter";
    namespace App {

        // mapDispatchToProps
        interface IStateProps {
            counter: Counter.IState
        }

        // mapDispatchToProps
        interface IDispatchProps {
            counterActions: Counter.IActions
        }

        // Props
        interface IProps extends IStateProps, IDispatchProps { }
    }
    export = App;
}
