var root = document.body

var bang = {
    view: function() {

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
            'z'
        ];

        return m("bang", [
            m("h2.w3-center", "Learn the Alphabet"),
            m("h3.w3-center[id='definition']"),
            m(".w3-container.w3-center.w3-bar",
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "A is for Apple"
                        })
                    },
                    alphabet[0]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "B is for Box"
                        })
                    },
                    alphabet[1]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "C is for Cat"
                        })
                    },
                    alphabet[2]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "D is for Dog"
                        })
                    },
                    alphabet[3]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "E is for Elephant"
                        })
                    },
                    alphabet[4]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "F is for Frog"
                        })
                    },
                    alphabet[5]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "G is for Girl"
                        })
                    },
                    alphabet[6]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "H is for Hay"
                        })
                    },
                    alphabet[7]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "I is for Igloo"
                        })
                    },
                    alphabet[8]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "J is for Joke"
                        })
                    },
                    alphabet[9]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "K is for King"
                        })
                    },
                    alphabet[10]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "L is for Lion"
                        })
                    },
                    alphabet[11]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "M is for Man"
                        })
                    },
                    alphabet[12]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "N is for Night"
                        })
                    },
                    alphabet[13]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "O is for Open"
                        })
                    },
                    alphabet[14]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "P is for Plant"
                        })
                    },
                    alphabet[15]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "Q is for Queen"
                        })
                    },
                    alphabet[16]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "R is for Room"
                        })
                    },
                    alphabet[17]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "S is for Soup"
                        })
                    },
                    alphabet[18]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "T is for Tree"
                        })
                    },
                    alphabet[19]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "U is for Up"
                        })
                    },
                    alphabet[20]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "V is for Violin"
                        })
                    },
                    alphabet[21]),
                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "W is for Water"
                        })
                    },
                    alphabet[22]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "X is for Xylophone"
                        })
                    },
                    alphabet[23]),

                m("button.w3-btn.w3-blue.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "Y is for Yogurt"
                        })
                    },
                    alphabet[24]),
                m("button.w3-btn.w3-padding-large", {
                        onclick: (function() {
                            document.getElementById("definition").innerHTML = "Z is for Zebra"
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