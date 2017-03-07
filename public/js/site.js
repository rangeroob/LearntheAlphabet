var root = document.body

var bang = {
    view: function() {

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
            'z'
        ];

        function alphabetDefinitions(number) {
            var definitions = ['A is for Apple', 'B is for Box', 'C is for Cat', 'D is for Dog', 'E is for Elephant',
                'F is for Frog', 'G is for Girl', 'H is for Hay', 'I is for Igloo', 'J is for Joke',
                'K is for King', 'L is for Lion', 'M is for Man', 'N is for Night', 'O is for Open',
                'P is for Plant', 'Q is for Queen', 'R is for Room', 'S is for Soup', 'T is for Tree',
                'U is for Up', 'V is for Violin', 'W is for Water', 'X is for Xylophone', 'Y is for Yogurt',
                'Z is for Zebra'
            ];

            return document.getElementById("definition").innerHTML = definitions[number];

        };

        function imageList(number) {
            var list = ['public/imgs/A.jpg'];
            document.getElementById("images").height = "200";
            document.getElementById("images").width = "300";
            document.getElementById("images").style.display = "block";
            document.getElementById("images").style.margin = "auto";
            return document.getElementById("images").src = list[number];

        }

        return m("bang", [
            m("h2.w3-center", "Learn the Alphabet"),
            m("h3.w3-center[id='definition']"),
            m("img[id='images']"),
            m(".w3-container.w3-center.w3-bar",
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(0);
                            imageList(0);
                        })

                    },
                    alphabet[0]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(1)
                        })
                    },
                    alphabet[1]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(2)
                        })
                    },
                    alphabet[2]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(3)
                        })
                    },
                    alphabet[3]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(4)
                        })
                    },
                    alphabet[4]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(5)
                        })
                    },
                    alphabet[5]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(6)
                        })
                    },
                    alphabet[6]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(7)
                        })
                    },
                    alphabet[7]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(8)
                        })
                    },
                    alphabet[8]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(9)
                        })
                    },
                    alphabet[9]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(10)
                        })
                    },
                    alphabet[10]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(11)
                        })
                    },
                    alphabet[11]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(12)
                        })
                    },
                    alphabet[12]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(13)
                        })
                    },
                    alphabet[13]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(14)
                        })
                    },
                    alphabet[14]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(15)
                        })
                    },
                    alphabet[15]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(16)
                        })
                    },
                    alphabet[16]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(17)
                        })
                    },
                    alphabet[17]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(18)
                        })
                    },
                    alphabet[18]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(19)
                        })
                    },
                    alphabet[19]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(20)
                        })
                    },
                    alphabet[20]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(21)
                        })
                    },
                    alphabet[21]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(22)
                        })
                    },
                    alphabet[22]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(23)
                        })
                    },
                    alphabet[23]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(24)
                        })
                    },
                    alphabet[24]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(25)
                        })
                    },
                    alphabet[25])


            )

        ])
    },

}


m.route(root, "/bang", {
    "/bang": bang,
})