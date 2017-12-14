var root = document.body

var bang = {
  view: function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
      'z'
    ]

    function alphabetDefinitions (number) {
      var definitions = ['A is for Apple', 'B is for Bug', 'C is for Cat', 'D is for Dog', 'E is for Elephant',
        'F is for Frog', 'G is for Girl', 'H is for Hay', 'I is for Igloo', 'J is for Joke',
        'K is for King', 'L is for Lion', 'M is for Man', 'N is for Night', 'O is for Ocean',
        'P is for Plant', 'Q is for Queen', 'R is for Room', 'S is for Soup', 'T is for Tree',
        'U is for Up', 'V is for Violin', 'W is for World', 'X is for Xylophone', 'Y is for Yogurt',
        'Z is for Zebra'
      ]

      document.getElementById('definition').innerHTML = definitions[number]
    }

    function imageList (number) {
      var list = ['public/imgs/A.jpg', 'public/imgs/B.jpg', 'public/imgs/c.jpg',
        'public/imgs/D.jpg', 'public/imgs/E.jpg', 'public/imgs/F.jpg', 'public/imgs/G.jpg',
        'public/imgs/H.jpg', 'public/imgs/I.jpg', 'public/imgs/J.jpg', 'public/imgs/K.jpg',
        'public/imgs/L.jpeg', 'public/imgs/M.jpg', 'public/imgs/N.jpg', 'public/imgs/O.jpg',
        'public/imgs/P.jpg', 'public/imgs/Q.jpg', 'public/imgs/R.jpeg', 'public/imgs/S.jpeg',
        'public/imgs/T.jpg', 'public/imgs/U.jpg', 'public/imgs/V.jpeg', 'public/imgs/W.jpg',
        'public/imgs/X.jpg', 'public/imgs/Y.jpeg', 'public/imgs/Z.jpeg'
      ]
      document.getElementById('images').height = '200'
      document.getElementById('images').width = '300'
      document.getElementById('images').style.display = 'block'
      document.getElementById('images').style.margin = 'auto'
      document.getElementById('images').src = list[number]
    }

    function soundBytes (number) {
      var sounds = ['public/sound/67712__corsica-s__a.mp3', 'public/sound/67713__corsica-s__b.mp3', 'public/sound/67714__corsica-s__c.mp3',
        'public/sound/67715__corsica-s__d.mp3', 'public/sound/67716__corsica-s__e.mp3', 'public/sound/67717__corsica-s__f.mp3',
        'public/sound/67718__corsica-s__g.mp3', 'public/sound/67719__corsica-s__h.mp3', 'public/sound/67720__corsica-s__i.mp3',
        'public/sound/67721__corsica-s__j.mp3', 'public/sound/67722__corsica-s__k.mp3', 'public/sound/67723__corsica-s__l.mp3',
        'public/sound/67724__corsica-s__m.mp3', 'public/sound/67725__corsica-s__n.mp3', 'public/sound/67726__corsica-s__o.mp3',
        'public/sound/67727__corsica-s__p.mp3', 'public/sound/67728__corsica-s__q.mp3', 'public/sound/67729__corsica-s__r.mp3',
        'public/sound/67730__corsica-s__s.mp3', 'public/sound/67731__corsica-s__t.mp3', 'public/sound/67732__corsica-s__u.mp3',
        'public/sound/67733__corsica-s__v.mp3', 'public/sound/67734__corsica-s__w.mp3', 'public/sound/67735__corsica-s__x.mp3',
        'public/sound/67736__corsica-s__y.mp3', 'public/sound/67737__corsica-s__z.mp3']
      var getSound = document.getElementById('sound').src = sounds[number]
      document.getElementById('sound').play(getSound)
    };

    return m('bang', [
      m('h2.w3-center', 'Learn the Alphabet'),
      m("h3.w3-center[id='definition']"),
      m("img[id='images']"),
      m("audio[id='sound']"),
      m('br'),
      m('.w3-container.w3-center.w3-bar',
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(0)
            imageList(0)
            soundBytes(0)
          }

        },
          alphabet[0]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(1)
            imageList(1)
            soundBytes(1)
          }
        },
          alphabet[1]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(2)
            imageList(2)
            soundBytes(2)
          }
        },
          alphabet[2]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(3)
            imageList(3)
            soundBytes(3)
          }
        },
          alphabet[3]),

        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(4)
            imageList(4)
            soundBytes(4)
          }
        },
          alphabet[4]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(5)
            imageList(5)
            soundBytes(5)
          }
        },
          alphabet[5]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(6)
            imageList(6)
            soundBytes(6)
          }
        },
          alphabet[6]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(7)
            imageList(7)
            soundBytes(7)
          }
        },
          alphabet[7]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(8)
            imageList(8)
            soundBytes(8)
          }
        },
          alphabet[8]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(9)
            imageList(9)
            soundBytes(9)
          }
        },
          alphabet[9]),

        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(10)
            imageList(10)
            soundBytes(10)
          }
        },
          alphabet[10]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(11)
            imageList(11)
            soundBytes(11)
          }
        },
          alphabet[11]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(12)
            imageList(12)
            soundBytes(12)
          }
        },
          alphabet[12]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(13)
            imageList(13)
            soundBytes(13)
          }
        },
          alphabet[13]),

        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(14)
            imageList(14)
            soundBytes(14)
          }
        },
          alphabet[14]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(15)
            imageList(15)
            soundBytes(15)
          }
        },
          alphabet[15]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(16)
            imageList(16)
            soundBytes(16)
          }
        },
          alphabet[16]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(17)
            imageList(17)
            soundBytes(17)
          }
        },
          alphabet[17]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(18)
            imageList(18)
            soundBytes(18)
          }
        },
          alphabet[18]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(19)
            imageList(19)
            soundBytes(19)
          }
        },
          alphabet[19]),

        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(20)
            imageList(20)
            soundBytes(20)
          }
        },
          alphabet[20]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(21)
            imageList(21)
            soundBytes(21)
          }
        },
          alphabet[21]),
        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(22)
            imageList(22)
            soundBytes(22)
          }
        },
          alphabet[22]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(23)
            imageList(23)
            soundBytes(23)
          }
        },
          alphabet[23]),

        m('button.w3-btn.w3-blue.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(24)
            imageList(24)
            soundBytes(24)
          }
        },
          alphabet[24]),
        m('button.w3-btn.w3-padding-large', {
          onclick: function () {
            alphabetDefinitions(25)
            imageList(25)
            soundBytes(25)
          }
        },
          alphabet[25])

      )

    ])
  }

}

m.route(root, '/bang', {
  '/bang': bang
})
