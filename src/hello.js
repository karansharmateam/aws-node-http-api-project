"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Final testing of the project it show on ci/cd",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
