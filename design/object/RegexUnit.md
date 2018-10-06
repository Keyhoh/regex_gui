###RegexUnitImpl
This object is the unit of regular expression. This unit can have yourself as a property of array type.
####field
| Name | Type | Input Method | Description |
|:---:|:---:|:---:|:---:|
| logicalOperator | String | drop down list | logical operators |
| characters | String | text input | usable either this or regex units |
| regexUnits | \[ RegexUnitImpl \] | add button | add or remove by button operation |

####method
| Name | Input | Return | Output Type | Description |
|:---:|:---:|:---:|:---:|:---:|
| toRegex | None | Regular expression | String | If *RegexUnitImpl* has non-empty *regex units* property, call this method recursively. | 

###Class Chart
```puml
class RegexUnitImpl{
    -logicalOperator: String = 'and'
    -characters: String = ''
    -regexUnits: Array = []
    
    +toRegex(): String
}
```
