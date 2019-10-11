from datetime import datetime


def convert_start_end_date(start_date, end_date, in_future=True):
    if start_date is None or end_date is None:
        raise ValueError('start_date et end_date sont requis.')
    start_date = datetime.strptime(start_date, '%Y-%m-%d')
    end_date = datetime.strptime(end_date, '%Y-%m-%d')

    if start_date >= end_date:
        raise ValueError('La date debut doit avoir lieu avant la date du fin.')

    if in_future:
        if start_date < datetime.combine(datetime.today(), datetime.min.time()):
            raise ValueError('La date debut ne peut pas etre dans le passe.')
    return start_date, end_date
