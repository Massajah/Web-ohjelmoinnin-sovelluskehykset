import React from "react";

export default function News(){
    return <div className="bigBox">
                <div className="newsBox1">
                    <div className="content">
                        <div className="contentHeader1"><h1>Koronavirus</h1></div>
                        <img className="covid" src="covid19.jpg" alt="korona" />
                        <div className="contentAltHeader"><h3>HS seuraa</h3></div>
                        <div className="news1"><p>Päivittyvä seuranta </p>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</div>
                        <div className="news2"><h3>Koronaviruksen vaikutukset Suomessa</h3></div>
                        <img className="thl" src="thl.jpg" alt="thlkuva" />
                    </div>
                </div>              
                        <div className="newsBox2">
                            <div className="content2Header"><h1>Luetuimmat</h1></div>
                            <div className="content2Box1">
                                <div className="content2Box1Num">
                                    <div className="num2">1</div>
                                </div>
                                <div className="content2Box1News">Rikosepäilyt | EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</div>   
                            </div>

                            <div className="content2Box2">
                                <div className="content2Box2Num">
                                    <div className="num1">2</div>
                                </div>
                                <div className="content2Box2News">HS Vantaa | Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</div>   
                            </div>

                            <div className="content2Box3">
                                <div className="content2Box3Num">
                                    <div className="num3">3</div>
                                </div>
                                <div className="content2Box3News">Päivittyvä seuranta | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</div>   
                            </div>

                            <div className="content2Box4">
                                <div className="content2Box4Num">
                                    <div className="num4">4</div>
                                </div>
                                <div className="content2Box4News">Nyt.fi | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</div>   
                            </div>

                            <div className="content2Box5">
                                <div className="content2Box5Num">
                                    <div className="num5">5</div>
                                </div>
                                <div className="content2Box5News">Rikosepäilyt | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</div>   
                            </div>

                            <div className="content2Box6">
                                <div className="content2Box6Num">
                                    <div className="num6">6</div>
                                </div>
                                <div className="content2Box6News">Helsinki | Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille</div>   
                            </div>


                        </div>           
            </div>
}
