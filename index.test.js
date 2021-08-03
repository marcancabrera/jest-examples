const printerError = require("./index")

test("The output is empty", () => {
    expect(printerError("")).toBe("empty output")
})

test("Good output of printer", () => {
    expect(printerError("aaabbbbhaijjjm")).toBe("0.14")
})

test("Bad output of printer", () => {
    expect(printerError("Aaaabbbbhaijjjml")).toBe("2.16")
})

test("Bad output of printer 2", () => {
    expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toBe("8.22")
})