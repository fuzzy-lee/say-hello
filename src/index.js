import _ from "lodash";

function sayHello() {
    _.forEach([1, 2, 3], function (item) {
        console.log("forEach: ", item);

    });
    console.log("Hello, somebody!");
}

export {
    sayHello
}
