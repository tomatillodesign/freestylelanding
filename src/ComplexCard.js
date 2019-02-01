import React from 'react';

class ComplexCard extends React.Component {

     render() {

         const { classes } = this.props;

         // Set variables passed in
         let entryTitle = this.props.entryTitle;
         let entryExcerpt = this.props.entryExcerpt;
         let entryContent = this.props.entryContent;
         let entryDate = this.props.date;
         let author = this.props.author;
         let link = this.props.link;
         let entrySpecialMessage = this.props.entrySpecialMessage;
         let entryStartDate = this.props.entryStartDate;
         let entryEndDate = this.props.entryEndDate;
         let index = this.props.index;
         let startingAt = parseInt(this.props.startingAt);

         let marginLeft = '2%';
         let clear = 'inherit';

         let startDateObj = new Date(entryStartDate * 1000);
         //let endDatePublish = new Date(entryEndDate);
         let endDateRaw = entryEndDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
         let endDatePublish = new Date(endDateRaw);

         //let startDatePublish = startDateObj.getUTCDate() + ' - ' + startDateObj.getUTCFullYear();

          function createMarkup() {
            return {__html: entryTitle};
          }

          function publishDate(dateObject) {
               let str = dateObject.toUTCString();
               var res = str.replace("00:00:00 GMT", "");
               return res;
          }


          if( index === 0 || index%3 === 0 ) {
               marginLeft = 0;
               clear = 'both';
          }

          var divStyle = {
            marginLeft: marginLeft,
            clear: clear,
          };

          let startingAtFormatted = (startingAt).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

         return (

         <div className="trip-card-area">
          <a href={link} target="_blank" rel="noopener noreferrer">
               <div className="trip-card" style={divStyle}>
                    <h2 dangerouslySetInnerHTML={createMarkup()} />
                         <div className="entry-dates">{publishDate(startDateObj)} - {publishDate(endDatePublish)}</div>
                         <div className="entry-special-message">{entrySpecialMessage}</div>
                         <div className="starting-price">Starting at ${startingAtFormatted} USD</div>
               </div>
          </a>
          </div>

          );

         }

}

export default ComplexCard;
