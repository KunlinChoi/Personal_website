import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
        <p><b>{education.description2}</b>{education.description3} </p>
        </div>
      })
      var researchinterest = this.props.data.researchinterest.map(function(researchinterest){
        return <div key={researchinterest.title}>
            <h5>{researchinterest.description}<br/></h5>
            <p>{researchinterest.description2}</p>
        </div>
      })

      // var publication = this.props.data.publication.map(function(publication){
      //   return <div>
      //       <p>{publication.description}<br/></p>
      //   </div>
        
      // })
      var publication = this.props.data.publication.map(function(publication) {
        return (
          <div key={publication.description}>
            <h5>{publication.description}<br /></h5>
            <p2>{publication.description2}<br /></p2>
            <p>
              <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer">
                [pdf]
              </a>
            </p>
          </div>
        );
      });

      var research = this.props.data.research.map(function(research){
        return <div key={research.description}>
            <p2>{research.description1}<br/></p2>
            <p2>{research.description2}<br/></p2>
            <p2>{research.description3}<br/></p2>
            <p2>{research.description4}<br/></p2>
            <p2>{research.description5}<br/></p2>
            <p2>{research.description6}<br/></p2>
            <p2>{research.description7}<br/></p2>
            <p2>{research.description8}<br/></p2>
            <p>{research.description9}</p>
        </div>
      })
      
    
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h4>{work.company}</h4>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p2>{work.description} <br/></p2>
            <p2>{work.description2}<br/></p2>
            <p2>{work.description3}<br/></p2>
            <p>{work.description4}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row researchinterest">

         <div className="three columns header-col">
            <h1><span>Research Interest</span></h1>
         </div>

         <div className="nine columns main-col">
          {researchinterest}
        </div>
      </div>

      <div className="row publication">

         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>

         <div className="nine columns main-col">
          {publication}
        </div>
      </div>

      <div className="row research">

         <div className="three columns header-col">
            <h1><span>News</span></h1>
         </div>

         <div className="nine columns main-col">
          {research}
        </div>
      </div>

    

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      
   </section>
    );
  }
}

export default Resume;
