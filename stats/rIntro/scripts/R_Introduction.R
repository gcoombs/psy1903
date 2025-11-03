#### Check various data types ----
## Numeric
x <- 3.14     # Assign a variable x to be the number 3.14
typeof(x)     # Check typeof x, output = double (number with decimal point precision)
class(x)      # Check class of x, output = numeric (it's a number)
is.numeric(x) # Check if x is numeric, output = TRUE

## Integer
int <- 5L       # Assign a variable called int to be the integer (whole number) 5
typeof(int)     # Check typeof int, output = integer
class(int)      # Check class of int, output = integer
is.numeric(int) # Check if int is numeric, output = TRUE (integers are types of numbers)
is.integer(int) # Check if int is an integer, output = TRUE
is.integer(x)   # Check if x is an integer, output = FALSE (not all numbers are integers)

## Character Strings
word <- "hello" # Create a variable called word with the string "hello"
typeof(word)    # Check typeof word, output = character
is.character(word)  # Check if word is a character string, output = TRUE
is.numeric(word)    # Check if word is a number, output = FALSE

## Logical
flag <- TRUE      # Create a variable called flag with a value of TRUE (logical or boolean expression)
typeof(flag)      # Check type of flag, output = logical
is.logical(flag)  # Check if flag is logical, output = TRUE
flag2 <- F        # Logical expressions can be abbreviated as T (TRUE) and F (FALSE) but must be capitalized
typeof(flag2)     # Check type of flag2, output = logical
flag3 <- f        # Won't work because lowercase f is not recognized as FALSE and it looks for an object called f, output = Error: object 'f' not found

## NA (not applicable)
missing <- NA
is.na(missing)
typeof(missing) 

## Calculations with NA
scores <- c(90, 85, NA, 88)
scores
mean(scores)
x + missing
mean(scores, na.rm = TRUE)

is.na(scores)

scores2 <- na.omit(scores)
scores2
mean(scores2)

#### Data Structures ----
## Vectors
numeric_vector <- c(1.5, 2.3, 5.0)  # Numeric vector
character_vector <- c("apple", "banana", "cherry")  # Character vector
typeof(character_vector) # Will output "character" in the console window

## Matrices
my_matrix <- matrix(1:9, nrow = 3, ncol = 3)

## Data Frames
my_data <- data.frame(
  id = 1:3,
  name = c("Alice", "Bob", "Charlie"),
  score = c(85.5, 92.0, 88.5)
)

## Functions
my_function <- function(x, y) {
  return(x + y)
}
my_function(3, 5)  # Calls the function and returns 8

fruits <- c("apple", "banana", "cherry", "date")
fruits[1]       # first element
fruits[2:4]     # elements 2 through 4
fruits[-1]      # all but the first element

nums <- c(5, 10, 15, 20)
nums[c(TRUE, FALSE, TRUE, FALSE)]  # selects 5 and 15
nums[nums > 10]                    # selects elements greater than 10

scores <- c(math = 90, english = 85, science = 92)
scores["math"]
scores[c("math", "science")]

student <- list(
  name = "Alex",
  age = 20,
  scores = c(88, 92, 95)
)

student$name
student[["age"]]
student$scores[2]

m <- matrix(1:9, nrow = 3, byrow = TRUE)
m
m[1, 2]     # row 1, column 2
m[ , 3]     # all rows, column 3
m[2, ]      # entire second row

df <- data.frame(
  id = 1:4,
  name = c("Alice", "Bob", "Carmen", "Diego"),
  score = c(88, 92, 95, 90)
)

df[1, ]       # selects the first row (all columns)
df[, 2]       # selects the second column (all rows)
df[1:2, c(1, 3)]  # selects rows 1–2 and columns 1 and 3

df[-1, ]   # all rows except the first
df[, -2]   # all columns except the second

df$name       # returns the 'name' column as a vector
df$score      # returns the 'score' column as a vector
df[, "score"] # identical result
typeof(df$score)
typeof(df[,"score", drop = F])

col_to_access <- "name"
df[[col_to_access]]   # same as df$score

df[df$score > 90, ]      # rows where score is greater than 90
df[df$name == "Alice", ] # rows where name is Alice

df[df$score > 90 & df$id < 4, ]

df$passed <- df$score >= 90
df

df$passed <- NULL
df

new_row <- data.frame(id = 5, name = "Eva", score = 93)
df <- rbind(df, new_row)
df

df2 <- df[-1, ]  # removes the first row
df

df[df$score > 90 & df$name != "Bob", c("name", "score")]

columns_to_keep <- c("id", "score")
df[, columns_to_keep]

mean(df[df$score > 90, "score"])
sum(df$score > 90)

data[data$rt > 400 & !is.na(data$rt), ]

subset(df, score > 90 & id < 4, select = c(name, score))

data <- data.frame(
  subject_id = 1:20,
  rt = c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445,
         275, NA, 600, 290, 560, 375, 450, 480, 325, 430),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE,
                FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE,
                TRUE, FALSE, TRUE, FALSE, TRUE, FALSE),
  color = c("red", "blue", "blue", "green", "red", "red", "blue",
            "green", "blue", "green", "red", "blue", "green", "blue",
            "green", "red", "blue", "blue", "green", "red")
)

congruent_trials <- data[data$congruent == TRUE, ]
fast_trials <- data[data$rt < 500, ]
fast_congruent <- data[data$congruent == TRUE & data$rt < 500, ]

mean(data[data$congruent == TRUE, "rt"], na.rm = TRUE)
mean(data[data$congruent == FALSE, "rt"], na.rm = TRUE)
sum(is.na(data$rt))
mean(data[data$color == "blue", "rt"], na.rm = TRUE)
mean(data[data$color == "red", "rt"], na.rm = TRUE)

subset_cols <- data[, c("subject_id", "rt", "congruent")]
