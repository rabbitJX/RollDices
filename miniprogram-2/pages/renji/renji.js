// pages/bendi/bendi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1 : 1,
    value2 : 2,
    value3 : 3,
    value4 : 4,
    value5 : 5,
    value6 : 1,
    value7 : 2,
    value8 : 3,
    value9 : 4,
    value10 : 5,
    image1: 'image1',
    image2: 'image2',
    image3: 'image3',
    image4: 'image4',
    image5: 'image5',
    image6: 'image6',
    image7: 'image7',
    image8: 'image8',
    image9: 'image9',
    image10: 'image10',
    sd:[0,0,0,0,0,0,0,0,0,0],
    flag:[0,0,0,0,0,0,0,0,0,0],
    beishu: 1,
    chouma1: 0,
    chouma2: 0,
    zongjushu:0,
    jushu:1,
    flag1:0,
    flag2:0,
    lock1:[],
    lock2:[],
    round:0,
    cz:0,
    v:[],
    expect: new Array(9331).fill(0),
    AI_dices:[],
    al:[],
    AT:[],
    p1r:0,
    xz:[],
  },
  /**
   * 生成随机数
   */
  randomnum :function(){
    const f1=this.data.flag1;
    const f2=this.data.flag2;
    let r=this.data.round;
    const cz=this.data.cz;
    const zjs=this.data.zongjushu;
    let js=this.data.jushu;
    if(r==0){
      const expect = require('data.js');
      this.setData({
        expect:expect,
      })
    }
    if (cz==1&&zjs>=js){
      this.chongzhi();
    }
    js = this.data.jushu;
    r = this.data.round;
    if(r==0||(f1==1&&f2==1)){
    const na= this.data.sd.slice();
    const min = 0;
    const max = 6;
    for(let i=0;i<10;i++){
      if(na[i]==0){
        const randomNum =Math.floor((Math.random()*(max-min)+1));
        if(i==0){
          this.setData({
            value1:randomNum,
          })
        }
        if(i==1){
          this.setData({
            value2:randomNum,
          })
        }
        if(i==2){
          this.setData({
            value3:randomNum,
          })
        }
        if(i==3){
          this.setData({
            value4:randomNum,
          })
        }
        if(i==4){
          this.setData({
            value5:randomNum,
          })
        }
        if(i==5){
          this.setData({
            value6:randomNum,
          })
        }
        if(i==6){
          this.setData({
            value7:randomNum,
          })
        }
        if(i==7){
          this.setData({
            value8:randomNum,
          })
        }
        if(i==8){
          this.setData({
            value9:randomNum,
          })
        }
        if(i==9){
          this.setData({
            value10:randomNum,
          })
        }
      }
    }
    this.rollDices();
    }
  },
  /**
   * 锁定功能
   */
  suoding1: function(){
    const flag=this.data.flag.slice();
    const f1 = this.data.flag1;
    const r=this.data.round;
    if(flag[0]==0&&f1==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[0]==0){
    this.setData({
        image1:'image1d',
    })
    na[0]=1;
  }else{
    this.setData({
      image1:'image1'
    })
    na[0]=0;
  }
  this.setData({
    sd:na,
  })
}
},
  suoding2: function(){
    const flag=this.data.flag.slice();
    const f1 = this.data.flag1;
    const r=this.data.round;
    if(flag[1]==0&&f1==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[1]==0){
      this.setData({
          image2:'image2d',
      })
      na[1]=1;
    }else{
      this.setData({
        image2:'image2'
      })
      na[1]=0;
    }
    this.setData({
      sd:na,
    })
  }
},
  suoding3: function(){
    const flag=this.data.flag.slice();
    const f1 = this.data.flag1;
    const r=this.data.round;
    if(flag[2]==0&&f1==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[2]==0){
      this.setData({
          image3:'image3d',
      })
      na[2]=1;
    }else{
      this.setData({
        image3:'image3'
      })
      na[2]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  suoding4: function(){
    const flag=this.data.flag.slice();
    const f1 = this.data.flag1;
    const r=this.data.round;
    if(flag[3]==0&&f1==0&&r!=0){
    
    const na= this.data.sd.slice();
    if(na[3]==0){
      this.setData({
          image4:'image4d',
      })
      na[3]=1;
    }else{
      this.setData({
        image4:'image4'
      })
      na[3]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  suoding5: function(){
    const flag=this.data.flag.slice();
    const f1 = this.data.flag1;
    const r=this.data.round;
    if(flag[4]==0&&f1==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[4]==0){
      this.setData({
          image5:'image5d',
      })
      na[4]=1;
    }else{
      this.setData({
        image5:'image5'
      })
      na[4]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  suoding6: function(){
    const flag=this.data.flag.slice();
    const f2 = this.data.flag2;
    const r=this.data.round;
    if(flag[5]==0&&f2==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[5]==0){
    this.setData({
        image6:'image6d',
    })
    na[5]=1;
  }else{
    this.setData({
      image6:'image6'
    })
    na[5]=0;
  }
  this.setData({
    sd:na,
  })
}
},
  suoding7: function(){
    const flag=this.data.flag.slice();
    const f2 = this.data.flag2;
    const r=this.data.round;
    if(flag[6]==0&&f2==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[6]==0){
      this.setData({
          image7:'image7d',
      })
      na[6]=1;
    }else{
      this.setData({
        image7:'image7'
      })
      na[6]=0;
    }
    this.setData({
      sd:na,
    })
  }
},
  suoding8: function(){
    const flag=this.data.flag.slice();
    const f2 = this.data.flag2;
    const r=this.data.round;
    if(flag[7]==0&&f2==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[7]==0){
      this.setData({
          image8:'image8d',
      })
      na[7]=1;
    }else{
      this.setData({
        image8:'image8'
      })
      na[7]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  suoding9: function(){
    const flag=this.data.flag.slice();
    const f2 = this.data.flag2;
    const r=this.data.round;
    if(flag[8]==0&&f2==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[8]==0){
      this.setData({
          image9:'image9d',
      })
      na[8]=1;
    }else{
      this.setData({
        image9:'image9'
      })
      na[8]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  suoding10: function(){
    const flag=this.data.flag.slice();
    const f2 = this.data.flag2;
    const r=this.data.round;
    if(flag[9]==0&&f2==0&&r!=0){
    const na= this.data.sd.slice();
    if(na[9]==0){
      this.setData({
          image10:'image10d',
      })
      na[9]=1;
    }else{
      this.setData({
        image10:'image10'
      })
      na[9]=0;
    }
    this.setData({
      sd:na,
    })
  }
  },
  p1jiabei0:function(){
    const f = this.data.flag1;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=0;
    this.setData({
      beishu: bs,
      flag1:1,
    })
    this.setData({
      p1r:0,
    })
    let player1_lock=[];
    let value=this.data.v;
    let suoding = this.data.sd;
    for(let index = 0;index<5;index++){
      if(suoding[index]!=0){
        player1_lock.push(value[index])
      }
    }
    this.setData({
      lock1:player1_lock,
    })
    let AIrate = this.SelectRate();
    if(AIrate ==0){
      this.p2jiabei0();
    }
    if(AIrate==1){
      this.p2jiabei1();
    }
    if(AIrate==2){
      this.p2jiabei2();
    }
    if(AIrate==3){
      this.p2jiabei3();
    }
  }

  },
  p1jiabei1:function(){
    const f = this.data.flag1;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=1;
    this.setData({
      beishu: bs,
      flag1:1,
    })
    this.setData({
      p1r:1,
    })
    let player1_lock=[];
    let value=this.data.v;
    let suoding = this.data.sd;
    for(let index = 0;index<5;index++){
      if(suoding[index]!=0){
        player1_lock.push(value[index])
      }
    }
    this.setData({
      lock1:player1_lock,
    })
    let AIrate = this.SelectRate();
    if(AIrate ==0){
      this.p2jiabei0();
    }
    if(AIrate==1){
      this.p2jiabei1();
    }
    if(AIrate==2){
      this.p2jiabei2();
    }
    if(AIrate==3){
      this.p2jiabei3();
    }
  }
  },
  p1jiabei2:function(){
    const f = this.data.flag1;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=2;
    this.setData({
      beishu: bs,
      flag1:1,
    })
    this.setData({
      p1r:2,
    })
    let player1_lock=[];
    let value=this.data.v;
    let suoding = this.data.sd;
    for(let index = 0;index<5;index++){
      if(suoding[index]!=0){
        player1_lock.push(value[index])
      }
    }
    this.setData({
      lock1:player1_lock,
    })
    let AIrate = this.SelectRate();
    if(AIrate ==0){
      this.p2jiabei0();
    }
    if(AIrate==1){
      this.p2jiabei1();
    }
    if(AIrate==2){
      this.p2jiabei2();
    }
    if(AIrate==3){
      this.p2jiabei3();
    }
  }
  },
  p1jiabei3:function(){
    const f = this.data.flag1;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=3;
    this.setData({
      beishu: bs,
      flag1:1,
    })
    this.setData({
      p1r:3,
    })
    let player1_lock=[];
    let value=this.data.v;
    let suoding = this.data.sd;
    for(let index = 0;index<5;index++){
      if(suoding[index]!=0){
        player1_lock.push(value[index])
      }
    }
    this.setData({
      lock1:player1_lock,
    })
    let AIrate = this.SelectRate();
    if(AIrate ==0){
      this.p2jiabei0();
    }
    if(AIrate==1){
      this.p2jiabei1();
    }
    if(AIrate==2){
      this.p2jiabei2();
    }
    if(AIrate==3){
      this.p2jiabei3();
    }
  }
  },
  p2jiabei0:function(){
    const f = this.data.flag2;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=0;
    this.setData({
      beishu: bs,
      flag2:1,
    })
  }
  },
  p2jiabei1:function(){
    const f = this.data.flag2;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=1;
    this.setData({
      beishu: bs,
      flag2:1,
    })
  }
  },
  p2jiabei2:function(){
    const f = this.data.flag2;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=2;
    this.setData({
      beishu: bs,
      flag2:1,
    })
  }
  },
  p2jiabei3:function(){
    const f = this.data.flag2;
    const r=this.data.round;
    if(f==0&&r!=0){
    let bs = this.data.beishu;
    bs+=3;
    this.setData({
      beishu: bs,
      flag2:1,
    })
  }
  },
  rollDices:function() {
    let r = this.data.round;
    let suoding= this.data.sd.slice();
    r++;
    this.setData({
      flag:suoding,
      round:r,
      flag1:0,
      flag2:0,
    })
    let AI_lock = this.data.lock2;
    let AI_dice = [];
    let vai=this.data.value6;
    AI_dice.push(vai);
    vai=this.data.value7;
    AI_dice.push(vai);
    vai=this.data.value8;
    AI_dice.push(vai);
    vai=this.data.value9;
    AI_dice.push(vai);
    vai=this.data.value10;
    AI_dice.push(vai);
    this.setData({
      AT:AI_dice,
    })
    this.setData({
      AI_dices:AI_dice,
    })
    AI_lock=this.lock_dice();
    this.setData({
      al:AI_lock,
    })
    let AT=[];
    let va=this.data.value6;
    AT.push(va);
    va=this.data.value7;
    AT.push(va);
    va=this.data.value8;
    AT.push(va);
    va=this.data.value9;
    AT.push(va);
    va=this.data.value10;
    AT.push(va);
    let AIxzlock = this.data.xz;
    for(let i=0;i<AIxzlock.length;i++){
      for(let j=0;j<5;j++){
        if(AIxzlock[i]==AT[j] && AT[j] != 0)
        {
          if(j==0){
            this.suoding6();
          }
          else if(j==1){
            this.suoding7();
          }
          else if(j==2){
            this.suoding8();
          }
          else if(j==3){
            this.suoding9();
          }
          else if(j==4){
            this.suoding10();
          }
          AT[j]=0;
          break;
          }
          
        }
      }
    let player1_lock = [];
    let player2_lock = [];
    let value = [];
    let v=this.data.value1;
    suoding = this.data.sd;
    value.push(v);
    v=this.data.value2;
    value.push(v);
    v=this.data.value3;
    value.push(v);
    v=this.data.value4;
    value.push(v);
    v=this.data.value5;
    value.push(v);
    v=this.data.value6;
    value.push(v);
    v=this.data.value7;
    value.push(v);
    v=this.data.value8;
    value.push(v);
    v=this.data.value9;
    value.push(v);
    v=this.data.value10;
    value.push(v);
    suoding = this.data.sd;
      for(let index = 0;index<5;index++){
        if(suoding[index]!=0){
          player1_lock.push(value[index])
        }
      }
      for(let index = 5;index<10;index++){
        if(suoding[index]!=0){
          player2_lock.push(value[index])
       }
      }
    this.setData({
      lock1:player1_lock,
      lock2:player2_lock,
      v:value,
    })
    if(r==3){
      if(suoding[0]==0){
        this.suoding1();
        suoding[0]==1;
      }
      if(suoding[1]==0){
        this.suoding2();
        suoding[1]==1;
      }
      if(suoding[2]==0){
        this.suoding3();
        suoding[2]==1;
      }
      if(suoding[3]==0){
        this.suoding4();
        suoding[3]==1;
      }
      if(suoding[4]==0){
        this.suoding5();
        suoding[4]==1;
      }
      if(suoding[5]==0){
        this.suoding6();
        suoding[5]==1;
      }
      if(suoding[6]==0){
        this.suoding7();
        suoding[6]==1;
      }
      if(suoding[7]==0){
        this.suoding8();
        suoding[7]==1;
      }
      if(suoding[8]==0){
        this.suoding9();
        suoding[8]==1;
      }
      if(suoding[9]==0){
        this.suoding10();
        suoding[9]==1;
      }
    
    
    
    this.setData({
      v:value,
    })
    for(let index = 0;index<5;index++){
      if(suoding[index]!=0){
        player1_lock.push(value[index])
      }
    }
    for(let index = 5;index<10;index++){
      if(suoding[index]!=0){
        player2_lock.push(value[index])
     }
    }

    this.setData({
      lock1:player1_lock,
      lock2:player2_lock,
      flag:suoding,
      round:r,
      flag1:0,
      flag2:0,
    });

    let score1=this.gamblingScore(player1_lock);
    let score2=this.gamblingScore(player2_lock);
    let score = (score1-score2)*this.data.beishu;
    let chouma1= parseInt(this.data.chouma1);
    chouma1+=score;
    let chouma2 = parseInt(this.data.chouma2);
    chouma2-=score;
    let jushu = this.data.jushu;
    jushu++;
  
    this.setData({
      chouma1:chouma1,
      chouma2: chouma2,
      jushu: jushu,
      cz: 1,
    })
    let zjs=this.data.zongjushu;
  if(zjs<jushu||chouma1<0||chouma2<0){
    this.jiesuan();
  }
}
},
  


gamblingScore:function(playerLock) {
  let cluster = {};
  let score = 0;

  for (let i = 0; i < playerLock.length; i++) {
    const dice = playerLock[i];
    if (!cluster[dice]) {
        cluster[dice] = 1;
    } else {
        cluster[dice]++;
    }
  }

  if (Object.values(cluster).includes(5)) {
    score = 100;
  } else if (Object.values(cluster).includes(4)) {
    score = 40;
  } else if (Object.values(cluster).includes(3)) {
    if (Object.values(cluster).includes(2)) {
      score = 20;
    } else {
      score = 10;
    }
  } else {
    const sortedPlayerLock = playerLock.sort();
    const countOfTwos = Object.values(cluster).filter(value => value === 2).length;

    if (countOfTwos >= 2) {
      score = 10;
    } else if (countOfTwos === 1) {
      if (sortedPlayerLock[0] === 1 && sortedPlayerLock[4] === 4) {
        score = 30;
      } else if (sortedPlayerLock[0] === 2 && sortedPlayerLock[4] === 5) {
        score = 30;
      } else if (sortedPlayerLock[0] === 3) {
        score = 30;
      }
    } else {
      if (sortedPlayerLock[0] === 1) {
        if (sortedPlayerLock[4] === 5) {
          score = 60;
        } else if (sortedPlayerLock[1] === 3 || (sortedPlayerLock[4] === 6 && sortedPlayerLock[3] === 4)) {
          score = 30;
        }
      }
      if (sortedPlayerLock[0] === 2) {
        score = 60;
      }
    }
  }

  score += playerLock.reduce((acc, curr) => acc + parseInt(curr), 0);

  return score;
},
chongzhi:function(){
  this.setData({
    image1: 'image1',
    image2: 'image2',
    image3: 'image3',
    image4: 'image4',
    image5: 'image5',
    image6: 'image6',
    image7: 'image7',
    image8: 'image8',
    image9: 'image9',
    image10: 'image10',
    sd:[0,0,0,0,0,0,0,0,0,0],
    flag:[0,0,0,0,0,0,0,0,0,0],
    beishu: 1,
    flag1:0,
    flag2:0,
    lock1:[],
    lock2:[],
    round:0,
    cz:0,
    p1r:0,
  })
},
jiesuan() {
  let cm1 = this.data.chouma1;
  let cm2 = this.data.chouma2;
  if(cm1>cm2){
    wx.navigateTo({
      url: '/pages/jiesuanpl/jiesuanpl',
    })
  }else{
    wx.navigateTo({
      url: '/pages/jiesuanAI/jiesuanAI',
    })
  }
  
  },
/*getIndex:function(playerDice) {
  let index = 0;
    for (let i = 0; i < playerDice.length; i++) {
      index = index * 6 + playerDice[i];
    }
    let aa = index
    return index;
  },*/
lock_dice:function() {
    let playerLock = this.data.lock2;
    let playerDice = this.data.AI_dices;
    let dice_temp = []
    let sd = this.data.sd
    for (let i = 5; i < 10; i++){
      if (sd[i] == 0){
        dice_temp.push(playerDice[i - 5])
      }
    }
    playerDice = dice_temp
    playerDice.sort();
    var dice = playerLock.slice();
    var allCombinations = [];
    var playerIndex = this.getIndex(playerLock);
    var maxExpect = -100;
    var maxIndex = playerIndex;
    var count = 5 - playerLock.length;

    for (var i = 0; i <= count; i++) {
      var combinations = this.getCombinations(playerDice.slice(0, count), i); 
      allCombinations.push(...combinations);
  }
    let expect = this.data.expect;
    for (var i = 0; i < allCombinations.length; i++) {
        var combination = allCombinations[i];
        var initIndex = playerIndex;
        for (var j = 0; j < combination.length; j++) {
            initIndex = initIndex * 6 + combination[j];
        }
        if (expect[initIndex] > maxExpect) {
            maxExpect = expect[initIndex];
            maxIndex = initIndex;
            playerLock = combination.slice();
        }
    }
    const playerxzLock = playerLock.slice();
    this.setData({
      xz:playerxzLock,
    })
    playerLock.push(...dice);
    playerIndex = maxIndex;

    return playerLock;
},

// 生成所有组合的辅助函数

getCombinations(arr, count) {
  if (count === 0) {
      return [[]];
  }
  if (arr.length === 0) {
      return [];
  }

  var combinations = [];

  var first = arr[0];
  var remaining = arr.slice(1);

  var subcombinations = this.getCombinations(remaining, count - 1);
  for (var j = 0; j < subcombinations.length; j++) {
      var combination = [first].concat(subcombinations[j]);
      combinations.push(combination);
  }

  combinations.push(...this.getCombinations(remaining, count));

  return combinations;
},

// 获取索引的辅助函数，用于计算期望值
getIndex(arr) {
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
      index = index * 6 + arr[i];
  }
  return index;
},
get_all_expect(depth, index) {
  let expect = this.data.expect;  
  if (depth >= 5) {
      return;
    }
    for (let i = 1; i <= 6; i++) {
      this.setData({
        expect:expect,
      })
      this.get_all_expect(depth + 1, index * 6 + i);
      expect[index] += expect[index * 6 + i];
    }
    expect[index] /= 6.0;

  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad:function(options) {
    const cm1 = options.chouma1;
    const cm2 = options.chouma2;
    const js = options.jushu1;
    this.setData({
      chouma1:parseInt(cm1),
      chouma2:parseInt(cm2),
      zongjushu: parseInt(js),

    })
  },
 init_expect() {
    for (let i1 = 0; i1 < 6; i1++) {
      for (let i2 = 0; i2 < 6; i2++) {
        for (let i3 = 0; i3 < 6; i3++) {
          for (let i4 = 0; i4 < 6; i4++) {
            for (let i5 = 0; i5 < 6; i5++) {
              var res = [i1 + 1, i2 + 1, i3 + 1, i4 + 1, i5 + 1];
              // 假设有一个名为"tree_push"的函数，它用于处理GamblingScore
              let scorer=this.gamblingScore(res);
              this.tree_push(i1 + 1, i2 + 1, i3 + 1, i4 + 1, i5 + 1, scorer);
            }
          }
        }
      }
    }
    this.get_all_expect(0, 0);
    
  },
tree_push(x1, x2, x3, x4, x5, num) {
  let expect=this.data.expect;  
  const index = ((((0 * 6 + x1) * 6 + x2) * 6 + x3) * 6 + x4) * 6 + x5;
    expect[index] = num;
  },
  
  
  
SelectRate() {
  let player_rate = parseInt(this.data.p1r);
  let player_expect = this.data.lock1;
  let AI_expect = this.data.lock2;
  let player_index = this.getIndex(player_expect);
  player_expect = this.data.expect[player_index];
  let AI_index = this.getIndex(AI_expect);
  AI_expect = this.data.expect[AI_index];
  if (player_expect > AI_expect) {
      return 0;
    } else if (player_expect === AI_expect) {
      return Math.random() < 0.5 ? 0 : 1;
    } else {
      if (AI_expect - player_expect >= 4.22342542) {
        return 3;
      } else {
        if (player_rate >= 1) {
          return Math.random() < 0.5 ? 0 : 1;
        } else {
          return 3;
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})