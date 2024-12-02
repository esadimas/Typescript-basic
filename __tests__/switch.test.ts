describe("Switch statement", () => {
    it('should support switch statement', () => {
        function sayHello(name?: string): string {
            switch(name) {
                case "Dimas":
                    return "Hi Dimas"
                case "Dwi": 
                    return "Hi Dwi"
                case "Jiso":
                    return "Hi jiso"
                default: 
                    return "Hi User"
            }
        }

        console.log(sayHello("Dimas"))
        console.log(sayHello("Dwi"))
        console.log(sayHello("Jiso"))
        console.log(sayHello())
    })
});
