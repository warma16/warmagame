
var x = {
    bg: "",
    people: {
        cb: {
            data: "",
            name: "Crazy Bucket"
        },
    },
    content: {
        "000": {
            say: "你好，我是Crazy Bucket。很高兴认识你",
            buttondata: null,
            bg: 'bg.jpg',
            peopleimage: 'cb',
            session: "001",
            nextbutton: true,
            name: "Crazy Bucket",
            link: null
        },
        "001": {
            say: "您选A还是选B呢",
            buttondata: [{ text: "A", link: "002" }, { text: "B", link: "003" }],
            bg: 'bg.jpg',
            peopleimage: 'cb',
            name: "Crazy Bucket",
            session: null,
            nextbutton: null,
            link: null

        },
        "002": {
            say: "你刚才选了a",
            buttondata: null,
            bg: 'bg.jpg',
            peopleimage: 'cb',
            session: "004",
            nextbutton: true,
            name: "Crazy Bucket",
            link: null

        },
        "003": {
            say: "你刚才选了b",
            buttondata: null,
            bg: 'bg.jpg',
            peopleimage: 'cb',
            session: "004",
            nextbutton: true,
            name: "Crazy Bucket",
            link: null
        },
        "004": {
            say: "按下面即可返回主页",
            buttondata: null,
            bg: 'bg.jpg',
            peopleimage: 'cb',
            link: "/",
            nextbutton: true,
            name: "Crazy Bucket",
            session: null
        },
    }

}
export default x