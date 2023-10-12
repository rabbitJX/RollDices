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
  },
  /**
   * 生成随机数
   */
  randomnum :function(){
    const f1=this.data.flag1;
    const f2=this.data.flag2;
    const r=this.data.round;
    const cz=this.data.cz;
    const zjs=this.data.zongjushu;
    const js=this.data.jushu;
    if (cz==1&&zjs>=js){
      this.chongzhi();
    }
    if(r==0||(f1==1&&f2==1)){
    const na= this.data.sd.slice();
    const min = 0;
    const max = 6;
    const j=0;
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
    round:1,
    cz:0,
  })
},
jiesuan() {
  let cm1 = this.data.chouma1;
  let cm2 = this.data.chouma2;
  let sz ='';
  let bz ='';
  if(cm1>cm2){
    sz = '玩家1';
    bz = '玩家2';
  }else{
    sz = '玩家2';
    bz = '玩家1';
  }
    wx.navigateTo({
      url: '/pages/jiesuan/jiesuan?shengzhe='+sz+'&&baizhe='+bz+'',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad:function(options) {
    const cm1 = options.chouma1;
    const cm2 = options.chouma2;
    const js = options.jushu1;
    this.setData({
      chouma1:cm1,
      chouma2:cm2,
      zongjushu: js,

    })
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