new Vue({
    // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
    el: '#app',
    // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
    // data: {
    //     name: 'A山B郎',
    //     course: 'Webエンジニアコース',
    //     acceptancePeriod: '2019年01月期',
    //     defaultLastId: 3,
    //     students: [
    //         { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
    //         { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
    //         { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    //     ],
    //     nextStudentId: 4
    // },


    data: {
      name: 'ordinary Joe',
      course: 'Web Engineer Course',
      acceptancePeriod: 'January 2019',
      defaultLastId: 3,
      students: [
        { id: 1, name: 'Noro Hiroyoshi', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
        { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
        { id: 3, name: 'Saito Kazuki', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
      ],
      nextStudentId: 4,
    },
    // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
    methods: {
      addStudent: function (nextStudentId, name, course, acceptancePeriod) {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
        this.students.push({
          id: this.nextStudentId++,
          name: this.name,
          course: this.course,
          acceptancePeriod: this.acceptancePeriod
        })
        this.name = ''
        this.course = ''
        this.acceptancePeriod = ''
        }
    }
})

