class FizzBuzz
  # To change this template use File | Settings | File Templates.
  def initialize()

  end
  def isFizz(number)
    if (number % 3 == 0 )
      return true;
    else
      return false;
    end
  end
  def isBuzz(number)
    if (number % 5 == 0 )
      return true;
    else
      return false;
    end
  end
  def isFizzBuzz(number)
    if (isFizz(number) && isBuzz(number))
      return "IS FIZZBUZZ";
    elsif (isFizz(number))
      return "IS FIZZ";
    elsif (isBuzz(number))
       return "IS BUZZ";
    else
        return "NO FIZZ NO BUZZ";
    end
  end

end

fb= FizzBuzz.new();
puts(fb.isFizzBuzz(5));
