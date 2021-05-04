var fs = require("fs");

describe("Filter function", () => {
  let file;
  beforeAll(() => {
    file = fs.readFileSync("styles.css").toString();
    file = file.replace(/\r?\n|\r| /g, "");
  });
  /*Failed*/
  test("check for container scrollbar track background color", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-track{*[^}]*background-color/
    );
  });
  /*passed*/
  test("check for container scrollbar track border radius", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-track{*[^}]*border-radius/
    );
  });
 /*Passed*/
  test("check for container scrollbar track box-shadow", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-track{*[^}]*box-shadow:inset/
    );
  });
/*Failed*/
  test("check for container scrollbar thumb background color", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-thumb{*[^}]*background-color/
    );
  });
/*Passed*/
  test("check for container scrollbar thumb border radius", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-thumb{*[^}]*border-radius/
    );
  });
/*Passed*/
  test("check for container scrollbar thumb box-shadow", () => {
    expect(file).toMatch(
      /\.container::-webkit-scrollbar-thumb{*[^}]*box-shadow:inset/
    );
  });
/*Failed*/
  test("check for container scroll for y axis", () => {
    expect(file).toMatch(/\.container{*[^}]*overflow-y:scroll;/);
  });
/*Failed*/
  test("check for container scroll for x axis", () => {
    expect(file).toMatch(/\.container{*[^}]*overflow-x:scroll;/);
  });
});
