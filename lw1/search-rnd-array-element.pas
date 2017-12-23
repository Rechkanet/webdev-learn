program SearchRndElementInRndArray;
uses Crt;

const Arrlen = 10;
var
  Arr: Array [1..Arrlen] of integer;
  Key: integer;
  IsFound: boolean;
  i: integer;

begin

  randomize;

  for i := 1 to Arrlen do 
  begin
    Arr[i] := Random(15);
  end;
  writeln('Filled random Array: ');
  for i := 1 to Arrlen do
  begin
    write(Arr[i], ' ');
  end;  

  Key := Random(15);
  IsFound := False;
  for i:=1 to Arrlen do
  begin
    if Arr[i] = Key then 
    begin
      IsFound := True;
      break;
    end;
  end;
  
  if IsFound then
  begin
    writeln('Element ', Key, ' is found!');
  end  
  else
  begin
    writeln('Element ', Key, ' not found');
  end;  
end.