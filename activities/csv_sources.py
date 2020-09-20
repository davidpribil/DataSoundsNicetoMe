import csv
from collections import defaultdict
from functools import lru_cache

def activity_fraudulent(activity):
    return activity.Id in fraudulent_activities()

def user_recommendation(REF_PARTNER):
    return user_recommendations()[REF_PARTNER]

@lru_cache
def fraudulent_activities():
    result = set()
    with open('fraudulent_activities.csv') as fr:
        reader = csv.DictReader(fr)
        for row in reader:
            result.add(row['Id'])
    return result

@lru_cache
def user_recommendations():
    result = defaultdict(lambda _: "No recommendation for today")
    with open('Recomms-v2.csv') as fr:
        reader = csv.DictReader(fr)
        for row in reader:
            result[row['REF_PARTNER']] = row['recom']
    return result
