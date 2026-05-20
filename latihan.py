def number(data):
    counts = {}
    for item in data:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1
            
    unique_numbers = []
    for item, count in counts.items():
        if count == 1:
            unique_numbers.append(item)
            
    unique_numbers.sort()
    return unique_numbers
print(number([1, 2, 3, 4, 5, 2, 3, 6]))
    