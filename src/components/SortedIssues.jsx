import React, { Component } from 'react'

const SortedIssues = ({ sortedIssuesFunc }) => {

    return (
        <select onChange={(e) => sortedIssuesFunc(e.target.value)}>
            <option  selected>filter by ...</option>
            <option value={"date"}>by date</option>
            <option value={"priority"}>by priority</option>
        </select>
    )

}

export default SortedIssues;