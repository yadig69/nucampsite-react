/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments) {
            return (
              <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((comment) => (
                  <div>
                    <p>{comment.text}</p>
                    <p>
                      {comment.author},
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(comment.date)))}
                    </p>
                  </div>
                ))}
              </div>
            );
        }
    }

    renderCampsite(campsite) {
        return (
          <div className="col-md-5 m-1">
            <Card>
              <CardImg top src={campsite.image} alt={campsite.name} />{" "}
              <CardBody>
                <CardTitle> {campsite.name} </CardTitle>{" "}
                <CardText> {campsite.description} </CardText>{" "}
              </CardBody>{" "}
            </Card>{" "}
          </div>
        );
    }

      render() {

        if (this.props.campsite) {
            return <div className = "row" > < /div>
        } else {
            return <div > < /div>
        }

    }
}

export default CampsiteInfo