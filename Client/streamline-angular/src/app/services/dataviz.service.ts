import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DatavizService {

  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  constructor() { }

  public createSvgForPieChart(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  public createColorsForPieChart(ticketMapStatusToValues: any): void {
    this.colors = d3.scaleOrdinal()
    .domain(ticketMapStatusToValues.map(d => d.value.toString()))
    .range(["#34e3ac", "#0079d3", "#34a9e3", "#3734e3"]);
  }

  public drawPieChart(ticketMapStatusToValues: any): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.value));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(ticketMapStatusToValues))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(ticketMapStatusToValues))
    .enter()
    .append('text')
    .text(d => d.data.status + " : " +d.data.value)
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }
}
