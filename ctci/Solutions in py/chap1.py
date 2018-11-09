# def Urlify(str):
#   result = []
#   for i, char(str):
#     print(char[i])




# Urlify('hey steve man    ');


def isUinque(string):
   # Assuming character set is ASCII (128 characters)
  letters = {}
  for letter in string:
    if letter in letters:
      return False
    letters[letter] = True
  return True

isUinque('heya')

def isPerm(str1, str2):
  word1 = str1