#### Check various data types ----

## Numeric
x <- 3.14     # Assign a variable x to be the number 3.14
typeof(x)     # Returns "double" (a number stored with decimal precision)
class(x)      # Returns "numeric" (R’s general class for numbers)
is.numeric(x) # Checks if x is numeric, output = TRUE

## Integer
int <- 5L       # Assign a variable int as the integer (whole number) 5; the 'L' enforces integer type
typeof(int)     # Returns "integer"
class(int)      # Returns "integer"
is.numeric(int) # TRUE — integers are a subtype of numeric values
is.integer(int) # TRUE — confirms that int is an integer
is.integer(x)   # FALSE — x is numeric but not an integer (it’s stored as double precision)

## Character Strings
word <- "hello"      # Create a variable called word with the string "hello"
typeof(word)         # Returns "character"
is.character(word)   # TRUE — confirms word is a character string
is.numeric(word)     # FALSE — characters are not numbers

## Logical (TRUE/FALSE)
flag <- TRUE         # Assign the logical value TRUE to flag
typeof(flag)         # Returns "logical"
is.logical(flag)     # TRUE — confirms it’s a logical value

flag2 <- F           # Shortcut form for FALSE (must be uppercase T/F)
typeof(flag2)        # Returns "logical"

flag3 <- f           # This fails — lowercase f is treated as an undefined object
# Error: object 'f' not found

## NA (missing or not available)
missing <- NA            # Assign a missing value to the variable 'missing'
is.na(missing)           # TRUE — confirms that the value is missing
typeof(missing)          # Returns "logical" — NA behaves like a logical type by default

## Calculations with NA
scores <- c(90, 85, NA, 88)  # Create a numeric vector that includes a missing value
scores                       # Display the vector

mean(scores)                 # Returns NA because one element is missing
x + missing                  # Returns NA — any operation involving NA gives NA

mean(scores, na.rm = TRUE)   # Calculates the mean while removing missing values (na.rm = "remove NAs")

is.na(scores)                # Returns TRUE/FALSE for each element — TRUE where value is missing

scores2 <- na.omit(scores)   # Removes missing values from the vector
scores2                      # Displays the cleaned vector (90, 85, 88)
mean(scores2)                # Calculates the mean of the cleaned vector

#### Data Structures ----

## Vectors
numeric_vector <- c(1.5, 2.3, 5.0)  # Numeric vector (all numeric values)
character_vector <- c("apple", "banana", "cherry")  # Character vector (all strings)
typeof(character_vector)             # Returns "character"

## Matrices
my_matrix <- matrix(1:9, nrow = 3, ncol = 3)  # Create a 3x3 matrix with numbers 1–9 filled by column

## Data Frames
my_data <- data.frame(               # Create a small data frame (similar to a spreadsheet)
  id = 1:3,                          # Numeric column
  name = c("Alice", "Bob", "Charlie"), # Character column
  score = c(85.5, 92.0, 88.5)        # Numeric column
)
my_data                              # Display the data frame

## Functions
my_function <- function(x, y) {      # Define a simple function that adds two numbers
  return(x + y)                      # The result is explicitly returned
}

my_function(3, 5)  # Calls the function with arguments x = 3, y = 5; returns 8
