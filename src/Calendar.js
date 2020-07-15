import React, { Component } from "react"
import moment from 'moment';
import {
    CalendarWrapper,
    CalendarContainer,
    PagingButton,
    DayHeader
  } from './CalendarComponents'
export class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={
            date: moment(),
        }
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }
    createDayOfMonth(refDate){
        const date = moment(refDate).endOf('month');
        const lastDate = date.date();
        const firstWeekday = date.startOf('month').day();//day of the week

        const calendarDays = [];
        const today= moment();

        for(let i=0;i<firstWeekday;i++){
            calendarDays.push(<div key={Math.random()}/>);  //empty days
        }
        for(let w=1;w<lastDate;w++){
            calendarDays.push(<div key={w} today={date.date(w).isSame(today, 'day')}>{w}</div>);
        }
        while(calendarDays.length % 7 !== 0){
            calendarDays.push(<div key={Math.random()} />)
        }
        return calendarDays;
    }

    prevMonth(){
        this.setState({date: this.state.date.subtract(1,'month')})
    }

    nextMonth(){
        this.setState({date: this.state.date.add(1,'month')})
    }

    render(){
        const {prevMonth, nextMonth} = this.state;
        return (
            <CalendarWrapper>
                <h2>{this.state.date.format("MMMM YYYY")}</h2>
                <div>
                    {<PagingButton onClick={prevMonth}>&lt;</PagingButton>}
                    {<PagingButton onClick={nextMonth}>&lt;</PagingButton>}
                </div>
                <CalendarContainer>
                    <DayHeader>Sunday</DayHeader>
                    <DayHeader>Monday</DayHeader>
                    <DayHeader>Tuesday</DayHeader>
                    <DayHeader>Wednesday</DayHeader>
                    <DayHeader>Thursday</DayHeader>
                    <DayHeader>Friday</DayHeader>
                    <DayHeader>Saturday</DayHeader>
                    {this.createDayOfMonth(this.state.date)}
                </CalendarContainer>
            </CalendarWrapper>
        );
    }
}
