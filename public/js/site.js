var root = document.body

var bang = {
    view: function() {

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
            'z'
        ];

        function alphabetDefinitions(number) {
            var definitions = ['A is for Apple', 'B is for Bug', 'C is for Cat', 'D is for Dog', 'E is for Elephant',
                'F is for Frog', 'G is for Girl', 'H is for Hay', 'I is for Igloo', 'J is for Joke',
                'K is for King', 'L is for Lion', 'M is for Man', 'N is for Night', 'O is for Ocean',
                'P is for Plant', 'Q is for Queen', 'R is for Room', 'S is for Soup', 'T is for Tree',
                'U is for Up', 'V is for Violin', 'W is for World', 'X is for Xylophone', 'Y is for Yogurt',
                'Z is for Zebra'
            ];

            return document.getElementById("definition").innerHTML = definitions[number];

        };

        function imageList(number) {
            var list = ['public/imgs/A.jpg', 'public/imgs/B.jpg', 'public/imgs/c.jpg',
                'public/imgs/D.jpg', 'public/imgs/E.jpg', 'public/imgs/F.jpg', 'public/imgs/G.jpg',
                'public/imgs/H.jpg', 'public/imgs/I.jpg', 'public/imgs/J.jpg', 'public/imgs/K.jpg',
                'public/imgs/L.jpeg', 'public/imgs/M.jpg', 'public/imgs/N.jpg', 'public/imgs/O.jpg',
                'public/imgs/P.jpg', 'public/imgs/Q.jpg', 'public/imgs/R.jpeg', 'public/imgs/S.jpeg',
                'public/imgs/T.jpg', 'public/imgs/U.jpg', 'public/imgs/V.jpeg', 'public/imgs/W.jpg',
                'public/imgs/X.jpg', 'public/imgs/Y.jpeg', 'public/imgs/Z.jpeg'
            ];
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
                            imageList(1);
                        })
                    },
                    alphabet[1]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(2)
                            imageList(2);
                        })
                    },
                    alphabet[2]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(3)
                            imageList(3);
                        })
                    },
                    alphabet[3]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(4)
                            imageList(4);
                        })
                    },
                    alphabet[4]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(5)
                            imageList(5);
                        })
                    },
                    alphabet[5]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(6)
                            imageList(6);
                        })
                    },
                    alphabet[6]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(7)
                            imageList(7);
                        })
                    },
                    alphabet[7]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(8)
                            imageList(8);
                        })
                    },
                    alphabet[8]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(9)
                            imageList(9);
                        })
                    },
                    alphabet[9]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(10)
                            imageList(10);
                        })
                    },
                    alphabet[10]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(11)
                            imageList(11);
                        })
                    },
                    alphabet[11]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(12)
                            imageList(12);
                        })
                    },
                    alphabet[12]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(13)
                            imageList(13);
                        })
                    },
                    alphabet[13]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(14)
                            imageList(14);
                        })
                    },
                    alphabet[14]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(15)
                            imageList(15);
                        })
                    },
                    alphabet[15]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(16)
                            imageList(16);
                        })
                    },
                    alphabet[16]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(17)
                            imageList(17);
                        })
                    },
                    alphabet[17]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(18)
                            imageList(18);
                        })
                    },
                    alphabet[18]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(19)
                            imageList(19);
                        })
                    },
                    alphabet[19]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(20)
                            imageList(20);
                        })
                    },
                    alphabet[20]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(21)
                            imageList(21);
                        })
                    },
                    alphabet[21]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(22)
                            imageList(22);
                        })
                    },
                    alphabet[22]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(23)
                            imageList(23);
                        })
                    },
                    alphabet[23]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(24)
                            imageList(24);
                        })
                    },
                    alphabet[24]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            alphabetDefinitions(25)
                            imageList(25);
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