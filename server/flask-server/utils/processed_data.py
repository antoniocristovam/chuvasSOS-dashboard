def process_data(local_tags, last_hours_tags, date_time_tags):

    locals = list(map(get_tag_content, local_tags))
    last_24hours = list(map(get_tag_content, last_hours_tags))
    date_time = concat_date_and_time(date_time_tags)

    response = []

    for i in range(len(locals)):
        response.append({
            "local": locals[i],
            "last_24hours": last_24hours[i],
            "date_time": date_time[i] 
        })

    return response
def get_tag_content(tag):
    return tag.text

def concat_date_and_time(date_list):
    date_list_concat = []
    for i in range(len(date_list)):
        if i % 2 == 1:
            date_list_concat.append(
                str(date_list[i].text) + ' ' + str(date_list[i - 1].text))
    return date_list_concat