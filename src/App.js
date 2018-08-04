import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row,Col,Button } from 'reactstrap';
import { FaThumbsUp,FaThumbsDown } from 'react-icons/fa';
import CircularProgressbar from 'react-circular-progressbar';


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            like:0,
            dislike:0,
            marginVal:-15,
            showPop:false
        }
    }
    likeButtonFunc(){
        let upWaiter;
        let count =0;
        this.setState({
            showPop:true,
            like:this.state.like+1,
        })
        let upper = setInterval(()=>{
            count++
            if(this.state.marginVal>=-75){
                this.setState({marginVal:this.state.marginVal-1})
            }
            if(count>=60 ){
                upWaiter=setTimeout(()=>{
                    if(this.state.marginVal<=-75)
                    this.setState({
                        showPop:false,
                        marginVal:-15
                    })
                },1000)
                clearInterval(upper)

            }


        },5)

    }
    disLikeButton(){
        let upWaiter;
        let count =0;
        this.setState({
            showPop:true,
            dislike:this.state.dislike+1,
        })
        let upper = setInterval(()=>{
            count++
            if(this.state.marginVal>=-75){
                this.setState({marginVal:this.state.marginVal-1})
            }
            if(count>=60 ){
                upWaiter=setTimeout(()=>{
                    if(this.state.marginVal<=-75)
                        this.setState({
                            showPop:false,
                            marginVal:-15
                        })
                },1000)
                clearInterval(upper)

            }


        },5)

    }


    render() {
    return (
    <Row>
        <Col lg={{offset:3,size:6}} className="App">
            <div className="UstBaslik">
                <p>Fotoğrafçı Maturot Kongdee'nin kadrajına yansıyan Tayland'da çiftçi çocuk...</p>
            </div>
            <img className="Fotograf" src="https://yenisafak.feo.doracdn.com/resize/47uQufiZbmsgHk3H/550/0/resim/upload/2018/08/04/12/18/f1d353cdfotografcimaturotkongdeeninkadrajinayansiyantaylanddaciftcicocuk.jpg" alt=""/>
            <div className="AltKisim">
                <span classID="popLike" style={{opacity:!this.state.showPop?0:1,position:"absolute",padding:7,backgroundColor:'#52c3bd',borderRadius:100,marginTop:this.state.marginVal,color:'white',fontSize:14}}>{this.state.like-this.state.dislike} Beğeni</span>
                <div onClick={this.likeButtonFunc.bind(this)} style={{width:40,height:40,position:"absolute",marginTop:23,marginLeft:4,zIndex:4}}>
                    <CircularProgressbar
                        strokeWidth={10}
                        percentage={((this.state.like-this.state.dislike)/40)*100}
                        styles={{
                            fontSize:5,
                            path: { stroke: `rgba(62, 152, 199, ${50 / 100})` },
                            text: { fill: '#f88', fontSize: '16px' },
                        }}
                    />
                </div>

                <Button onClick={this.likeButtonFunc.bind(this)} className="ButtonTasarim" style={{background:"#52c3bd"}}>
                    <FaThumbsUp size="14"/></Button>


                <Button onClick={this.disLikeButton.bind(this)} className="ButtonTasarim">
                    <FaThumbsDown size="14"/></Button>
            </div>

        </Col>
    </Row>
    );
    }
}

export default App;
