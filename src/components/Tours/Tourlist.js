import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default class Tourlist extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }
  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />

        <div className={styles.center}>
          {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
