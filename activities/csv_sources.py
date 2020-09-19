import csv
from functools import lru_cache

def activity_fraudulent(activity):
    return activity.Id in fraudulent_activities()

@lru_cache
def fraudulent_activities():
    result = set()
    with open('fraudulent_activities.csv') as fr:
        reader = csv.DictReader(fr)
        for row in reader:
            result.add(row['Id'])
    return result
