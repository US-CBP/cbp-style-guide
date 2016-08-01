---
title: "Data formats"
---

<div class="pl-pattern">
### Date and time

#### Formats
{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px;">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td><code>time</code></td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td><code>short date</code></td>
            <td>Jan 11</td>
        </tr>
        <tr>
            <td><code>long date</code></td>
            <td>Apr 23, 2010</td>
        </tr>
        <tr>
            <td><code>condensed long date</code></td>
            <td>MM/DD/YYYY, DD/MM/YYYY, or YYYY/MM/DD</td>
        </tr>
        <tr>
            <td><code>short date and time</code></td>
            <td>Feb 5, 8:00 AM</td>
        </tr>
        <tr>
            <td><code>long date and time</code></td>
            <td>Feb 8, 2014, 1:00 PM</td>
        </tr>
        <tr>
            <td><code>day of week and time</code></td>
            <td>Mon, 7:30 AM</td>
        </tr>
        <tr>
            <td><code>day of week, short date and time</code></td>
            <td>Mon, Mar 15, 3:25 PM</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}


#### Condensed long date usage

The condensed version of the long date format has 3 variations:

- `MM/DD/YYYY` (05/12/2015)
- `DD/MM/YYYY` (12/05/2015)
- `YYYY/MM/DD` (2015/12/05)

`MM/DD/YYYY` is the format most used in the US, whereas `DD/MM/YYYY` is used most outside the US. Depending on the date, the format, and the geographical location or customs of the user, a date has the potential for being misinterpreted if the format is not what the user is expecting. The only non-ambiguous format is `YYYY/MM/DD`.

Depending on your target audience, determine which format makes the most sense for your application.


#### Smart format

For dates/times associated with user generated data (e.g., notes, documents), use the `smart format`, which changes relative to the current date.

{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px;">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td>If the date is in the past or future on the current day, format as <code>time</code> only</td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td>If the date is in the past or future within the current calendar year, format as <code>short date</code></td>
            <td>Jan 11</td>
        </tr>
        <tr>
            <td>If the date is in the past or future outside the current calendar year, format as <code>long date</code></td>
            <td>Apr 23, 2010</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}

#### Other

{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td>For reminders or appointments, show both time and date</td>
            <td>Jun 8, 8:00 AM <br>Today, 8:00 AM</td>
        </tr>
        <tr>
            <td>Separate ranges with an en-dash without a space</td>
            <td>Jun 15–Jun 16 <br> Dec 20, 2014–Jan 2, 2015</td>
        </tr>
        <tr>
            <td>If a time range shares a common AM/PM, append only on the end of the range</td>
            <td>10:00–11:00 AM <br>10:00 AM–12:30 PM</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}

</div>

<div class="pl-pattern">
### File sizes

- 340 KB (round to nearest KB)
- 4.13 MB (two decimal max)
- 3.22 GB (two decimal max)
- 1.13 TB (two decimal max)

&nbsp;

</div>
