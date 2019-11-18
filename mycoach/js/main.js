(function() {
    'use strict';

    var can = new Vue({
      el: '#can',
      data: {
        newItem: '',
        cans: []
      },
      watch: {
        cans: {
          handler: function() {
            localStorage.setItem('cans', JSON.stringify(this.cans));
          },
          deep: true
        }
      },

      mounted: function() {
        this.cans = JSON.parse(localStorage.getItem('cans')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.cans.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除しますか')) {
            this.cans.splice(index, 1);
          }
        },
        purge: function() {
          if (!confirm('チェックした項目を削除しますか?')) {
            return;
          }
          this.cans = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.cans.filter(function(can) {
            return !can.isDone;
          });
        }
      }
    });


    var will = new Vue({
      el: '#will',
      data: {
        newItem: '',
        wills: []
      },
      watch: {
        wills: {
          handler: function() {
            localStorage.setItem('wills', JSON.stringify(this.wills));
          },
          deep: true
        }
      },

      mounted: function() {
        this.wills = JSON.parse(localStorage.getItem('wills')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.wills.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除しますか')) {
            this.wills.splice(index, 1);
          }
        },
        purge: function() {
          if (!confirm('チェックした項目を削除しますか?')) {
            return;
          }
          this.wills = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.wills.filter(function(will) {
            return !will.isDone;
          });
        }
      }
    });
    
    var vm = new Vue({
      el: '#app',
      data: {
        newItem: '',
        todos: []
      },
      watch: {
        todos: {
          handler: function() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
          },
          deep: true
        }
      },

      mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除しますか')) {
            this.todos.splice(index, 1);
          }
        },
        purge: function() {
          if (!confirm('チェックした項目を削除しますか?')) {
            return;
          }
          this.todos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.todos.filter(function(todo) {
            return !todo.isDone;
          });
        }
      }
    });





$('.text3').click(function() {
    setTimeout(function(){
        window.location.href = 'video.html';
    }, 1000);
});

$('.text4').click(function() {
  setTimeout(function(){
      window.location.href = 'CloudVision.html';
  }, 1000);
});

$('.text2').click(function() {
  setTimeout(function(){
      window.location.href = 'mycoach_4.html';
  }, 1000);
});


  })();

  $(function() {
    var count = $(".container div.wcm").length;
    var index = 0;
    timer = setInterval(function() {
      $(".container div.wcm").eq(index).show(500);
      index ++;
      if(index == count) {
        clearInterval(timer);
      };
    }, 500);   
  });