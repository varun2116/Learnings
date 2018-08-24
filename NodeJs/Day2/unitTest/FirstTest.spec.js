describe("A suite", () => {
    it("contains spec", () => {
        expect(true).toBe(true);
    });
});

function Add(x,y){
    return x+y;
}

describe("A suite", () => {
    it("should add two numbers", () => {
        expect(Add(20,30)).toBe(50);
    });
});