var root = document.body,
    bang = {
        view: function() {
            function n(n) {
                var i = ["A is for Apple", "B is for Bug", "C is for Cat", "D is for Dog", "E is for Elephant", "F is for Frog", "G is for Girl", "H is for Hay", "I is for Igloo", "J is for Joke", "K is for King", "L is for Lion", "M is for Man", "N is for Night", "O is for Ocean", "P is for Plant", "Q is for Queen", "R is for Room", "S is for Soup", "T is for Tree", "U is for Up", "V is for Violin", "W is for World", "X is for Xylophone", "Y is for Yogurt", "Z is for Zebra"];
                return document.getElementById("definition").innerHTML = i[n]
            }

            function i(n) {
                var i = ["public/imgs/A.jpg", "public/imgs/B.jpg", "public/imgs/c.jpg", "public/imgs/D.jpg", "public/imgs/E.jpg", "public/imgs/F.jpg", "public/imgs/G.jpg", "public/imgs/H.jpg", "public/imgs/I.jpg", "public/imgs/J.jpg", "public/imgs/K.jpg", "public/imgs/L.jpeg", "public/imgs/M.jpg", "public/imgs/N.jpg", "public/imgs/O.jpg", "public/imgs/P.jpg", "public/imgs/Q.jpg", "public/imgs/R.jpeg", "public/imgs/S.jpeg", "public/imgs/T.jpg", "public/imgs/U.jpg", "public/imgs/V.jpeg", "public/imgs/W.jpg", "public/imgs/X.jpg", "public/imgs/Y.jpeg", "public/imgs/Z.jpeg"];
                return document.getElementById("images").height = "200", document.getElementById("images").width = "300", document.getElementById("images").style.display = "block", document.getElementById("images").style.margin = "auto", document.getElementById("images").src = i[n]
            }
            var t = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            return m("bang", [m("h2.w3-center", "Learn the Alphabet"), m("h3.w3-center[id='definition']"), m("img[id='images']"), m(".w3-container.w3-center.w3-bar", m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(0), i(0)
                }
            }, t[0]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(1), i(1)
                }
            }, t[1]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(2), i(2)
                }
            }, t[2]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(3), i(3)
                }
            }, t[3]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(4), i(4)
                }
            }, t[4]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(5), i(5)
                }
            }, t[5]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(6), i(6)
                }
            }, t[6]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(7), i(7)
                }
            }, t[7]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(8), i(8)
                }
            }, t[8]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(9), i(9)
                }
            }, t[9]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(10), i(10)
                }
            }, t[10]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(11), i(11)
                }
            }, t[11]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(12), i(12)
                }
            }, t[12]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(13), i(13)
                }
            }, t[13]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(14), i(14)
                }
            }, t[14]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(15), i(15)
                }
            }, t[15]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(16), i(16)
                }
            }, t[16]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(17), i(17)
                }
            }, t[17]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(18), i(18)
                }
            }, t[18]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(19), i(19)
                }
            }, t[19]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(20), i(20)
                }
            }, t[20]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(21), i(21)
                }
            }, t[21]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(22), i(22)
                }
            }, t[22]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(23), i(23)
                }
            }, t[23]), m("button.w3-btn.w3-blue.w3-padding-large", {
                onclick: function() {
                    n(24), i(24)
                }
            }, t[24]), m("button.w3-btn.w3-padding-large", {
                onclick: function() {
                    n(25), i(25)
                }
            }, t[25]))])
        }
    };
m.route(root, "/bang", {
    "/bang": bang
});