(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],Array(340).concat([
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.isArrayExpression=isArrayExpression;exports.isAssignmentExpression=isAssignmentExpression;exports.isBinaryExpression=isBinaryExpression;exports.isInterpreterDirective=isInterpreterDirective;exports.isDirective=isDirective;exports.isDirectiveLiteral=isDirectiveLiteral;exports.isBlockStatement=isBlockStatement;exports.isBreakStatement=isBreakStatement;exports.isCallExpression=isCallExpression;exports.isCatchClause=isCatchClause;exports.isConditionalExpression=isConditionalExpression;exports.isContinueStatement=isContinueStatement;exports.isDebuggerStatement=isDebuggerStatement;exports.isDoWhileStatement=isDoWhileStatement;exports.isEmptyStatement=isEmptyStatement;exports.isExpressionStatement=isExpressionStatement;exports.isFile=isFile;exports.isForInStatement=isForInStatement;exports.isForStatement=isForStatement;exports.isFunctionDeclaration=isFunctionDeclaration;exports.isFunctionExpression=isFunctionExpression;exports.isIdentifier=isIdentifier;exports.isIfStatement=isIfStatement;exports.isLabeledStatement=isLabeledStatement;exports.isStringLiteral=isStringLiteral;exports.isNumericLiteral=isNumericLiteral;exports.isNullLiteral=isNullLiteral;exports.isBooleanLiteral=isBooleanLiteral;exports.isRegExpLiteral=isRegExpLiteral;exports.isLogicalExpression=isLogicalExpression;exports.isMemberExpression=isMemberExpression;exports.isNewExpression=isNewExpression;exports.isProgram=isProgram;exports.isObjectExpression=isObjectExpression;exports.isObjectMethod=isObjectMethod;exports.isObjectProperty=isObjectProperty;exports.isRestElement=isRestElement;exports.isReturnStatement=isReturnStatement;exports.isSequenceExpression=isSequenceExpression;exports.isParenthesizedExpression=isParenthesizedExpression;exports.isSwitchCase=isSwitchCase;exports.isSwitchStatement=isSwitchStatement;exports.isThisExpression=isThisExpression;exports.isThrowStatement=isThrowStatement;exports.isTryStatement=isTryStatement;exports.isUnaryExpression=isUnaryExpression;exports.isUpdateExpression=isUpdateExpression;exports.isVariableDeclaration=isVariableDeclaration;exports.isVariableDeclarator=isVariableDeclarator;exports.isWhileStatement=isWhileStatement;exports.isWithStatement=isWithStatement;exports.isAssignmentPattern=isAssignmentPattern;exports.isArrayPattern=isArrayPattern;exports.isArrowFunctionExpression=isArrowFunctionExpression;exports.isClassBody=isClassBody;exports.isClassDeclaration=isClassDeclaration;exports.isClassExpression=isClassExpression;exports.isExportAllDeclaration=isExportAllDeclaration;exports.isExportDefaultDeclaration=isExportDefaultDeclaration;exports.isExportNamedDeclaration=isExportNamedDeclaration;exports.isExportSpecifier=isExportSpecifier;exports.isForOfStatement=isForOfStatement;exports.isImportDeclaration=isImportDeclaration;exports.isImportDefaultSpecifier=isImportDefaultSpecifier;exports.isImportNamespaceSpecifier=isImportNamespaceSpecifier;exports.isImportSpecifier=isImportSpecifier;exports.isMetaProperty=isMetaProperty;exports.isClassMethod=isClassMethod;exports.isObjectPattern=isObjectPattern;exports.isSpreadElement=isSpreadElement;exports.isSuper=isSuper;exports.isTaggedTemplateExpression=isTaggedTemplateExpression;exports.isTemplateElement=isTemplateElement;exports.isTemplateLiteral=isTemplateLiteral;exports.isYieldExpression=isYieldExpression;exports.isAnyTypeAnnotation=isAnyTypeAnnotation;exports.isArrayTypeAnnotation=isArrayTypeAnnotation;exports.isBooleanTypeAnnotation=isBooleanTypeAnnotation;exports.isBooleanLiteralTypeAnnotation=isBooleanLiteralTypeAnnotation;exports.isNullLiteralTypeAnnotation=isNullLiteralTypeAnnotation;exports.isClassImplements=isClassImplements;exports.isDeclareClass=isDeclareClass;exports.isDeclareFunction=isDeclareFunction;exports.isDeclareInterface=isDeclareInterface;exports.isDeclareModule=isDeclareModule;exports.isDeclareModuleExports=isDeclareModuleExports;exports.isDeclareTypeAlias=isDeclareTypeAlias;exports.isDeclareOpaqueType=isDeclareOpaqueType;exports.isDeclareVariable=isDeclareVariable;exports.isDeclareExportDeclaration=isDeclareExportDeclaration;exports.isDeclareExportAllDeclaration=isDeclareExportAllDeclaration;exports.isDeclaredPredicate=isDeclaredPredicate;exports.isExistsTypeAnnotation=isExistsTypeAnnotation;exports.isFunctionTypeAnnotation=isFunctionTypeAnnotation;exports.isFunctionTypeParam=isFunctionTypeParam;exports.isGenericTypeAnnotation=isGenericTypeAnnotation;exports.isInferredPredicate=isInferredPredicate;exports.isInterfaceExtends=isInterfaceExtends;exports.isInterfaceDeclaration=isInterfaceDeclaration;exports.isInterfaceTypeAnnotation=isInterfaceTypeAnnotation;exports.isIntersectionTypeAnnotation=isIntersectionTypeAnnotation;exports.isMixedTypeAnnotation=isMixedTypeAnnotation;exports.isEmptyTypeAnnotation=isEmptyTypeAnnotation;exports.isNullableTypeAnnotation=isNullableTypeAnnotation;exports.isNumberLiteralTypeAnnotation=isNumberLiteralTypeAnnotation;exports.isNumberTypeAnnotation=isNumberTypeAnnotation;exports.isObjectTypeAnnotation=isObjectTypeAnnotation;exports.isObjectTypeInternalSlot=isObjectTypeInternalSlot;exports.isObjectTypeCallProperty=isObjectTypeCallProperty;exports.isObjectTypeIndexer=isObjectTypeIndexer;exports.isObjectTypeProperty=isObjectTypeProperty;exports.isObjectTypeSpreadProperty=isObjectTypeSpreadProperty;exports.isOpaqueType=isOpaqueType;exports.isQualifiedTypeIdentifier=isQualifiedTypeIdentifier;exports.isStringLiteralTypeAnnotation=isStringLiteralTypeAnnotation;exports.isStringTypeAnnotation=isStringTypeAnnotation;exports.isThisTypeAnnotation=isThisTypeAnnotation;exports.isTupleTypeAnnotation=isTupleTypeAnnotation;exports.isTypeofTypeAnnotation=isTypeofTypeAnnotation;exports.isTypeAlias=isTypeAlias;exports.isTypeAnnotation=isTypeAnnotation;exports.isTypeCastExpression=isTypeCastExpression;exports.isTypeParameter=isTypeParameter;exports.isTypeParameterDeclaration=isTypeParameterDeclaration;exports.isTypeParameterInstantiation=isTypeParameterInstantiation;exports.isUnionTypeAnnotation=isUnionTypeAnnotation;exports.isVariance=isVariance;exports.isVoidTypeAnnotation=isVoidTypeAnnotation;exports.isJSXAttribute=isJSXAttribute;exports.isJSXClosingElement=isJSXClosingElement;exports.isJSXElement=isJSXElement;exports.isJSXEmptyExpression=isJSXEmptyExpression;exports.isJSXExpressionContainer=isJSXExpressionContainer;exports.isJSXSpreadChild=isJSXSpreadChild;exports.isJSXIdentifier=isJSXIdentifier;exports.isJSXMemberExpression=isJSXMemberExpression;exports.isJSXNamespacedName=isJSXNamespacedName;exports.isJSXOpeningElement=isJSXOpeningElement;exports.isJSXSpreadAttribute=isJSXSpreadAttribute;exports.isJSXText=isJSXText;exports.isJSXFragment=isJSXFragment;exports.isJSXOpeningFragment=isJSXOpeningFragment;exports.isJSXClosingFragment=isJSXClosingFragment;exports.isNoop=isNoop;exports.isPlaceholder=isPlaceholder;exports.isArgumentPlaceholder=isArgumentPlaceholder;exports.isAwaitExpression=isAwaitExpression;exports.isBindExpression=isBindExpression;exports.isClassProperty=isClassProperty;exports.isOptionalMemberExpression=isOptionalMemberExpression;exports.isPipelineTopicExpression=isPipelineTopicExpression;exports.isPipelineBareFunction=isPipelineBareFunction;exports.isPipelinePrimaryTopicReference=isPipelinePrimaryTopicReference;exports.isOptionalCallExpression=isOptionalCallExpression;exports.isClassPrivateProperty=isClassPrivateProperty;exports.isClassPrivateMethod=isClassPrivateMethod;exports.isImport=isImport;exports.isDecorator=isDecorator;exports.isDoExpression=isDoExpression;exports.isExportDefaultSpecifier=isExportDefaultSpecifier;exports.isExportNamespaceSpecifier=isExportNamespaceSpecifier;exports.isPrivateName=isPrivateName;exports.isBigIntLiteral=isBigIntLiteral;exports.isTSParameterProperty=isTSParameterProperty;exports.isTSDeclareFunction=isTSDeclareFunction;exports.isTSDeclareMethod=isTSDeclareMethod;exports.isTSQualifiedName=isTSQualifiedName;exports.isTSCallSignatureDeclaration=isTSCallSignatureDeclaration;exports.isTSConstructSignatureDeclaration=isTSConstructSignatureDeclaration;exports.isTSPropertySignature=isTSPropertySignature;exports.isTSMethodSignature=isTSMethodSignature;exports.isTSIndexSignature=isTSIndexSignature;exports.isTSAnyKeyword=isTSAnyKeyword;exports.isTSUnknownKeyword=isTSUnknownKeyword;exports.isTSNumberKeyword=isTSNumberKeyword;exports.isTSObjectKeyword=isTSObjectKeyword;exports.isTSBooleanKeyword=isTSBooleanKeyword;exports.isTSStringKeyword=isTSStringKeyword;exports.isTSSymbolKeyword=isTSSymbolKeyword;exports.isTSVoidKeyword=isTSVoidKeyword;exports.isTSUndefinedKeyword=isTSUndefinedKeyword;exports.isTSNullKeyword=isTSNullKeyword;exports.isTSNeverKeyword=isTSNeverKeyword;exports.isTSThisType=isTSThisType;exports.isTSFunctionType=isTSFunctionType;exports.isTSConstructorType=isTSConstructorType;exports.isTSTypeReference=isTSTypeReference;exports.isTSTypePredicate=isTSTypePredicate;exports.isTSTypeQuery=isTSTypeQuery;exports.isTSTypeLiteral=isTSTypeLiteral;exports.isTSArrayType=isTSArrayType;exports.isTSTupleType=isTSTupleType;exports.isTSOptionalType=isTSOptionalType;exports.isTSRestType=isTSRestType;exports.isTSUnionType=isTSUnionType;exports.isTSIntersectionType=isTSIntersectionType;exports.isTSConditionalType=isTSConditionalType;exports.isTSInferType=isTSInferType;exports.isTSParenthesizedType=isTSParenthesizedType;exports.isTSTypeOperator=isTSTypeOperator;exports.isTSIndexedAccessType=isTSIndexedAccessType;exports.isTSMappedType=isTSMappedType;exports.isTSLiteralType=isTSLiteralType;exports.isTSExpressionWithTypeArguments=isTSExpressionWithTypeArguments;exports.isTSInterfaceDeclaration=isTSInterfaceDeclaration;exports.isTSInterfaceBody=isTSInterfaceBody;exports.isTSTypeAliasDeclaration=isTSTypeAliasDeclaration;exports.isTSAsExpression=isTSAsExpression;exports.isTSTypeAssertion=isTSTypeAssertion;exports.isTSEnumDeclaration=isTSEnumDeclaration;exports.isTSEnumMember=isTSEnumMember;exports.isTSModuleDeclaration=isTSModuleDeclaration;exports.isTSModuleBlock=isTSModuleBlock;exports.isTSImportType=isTSImportType;exports.isTSImportEqualsDeclaration=isTSImportEqualsDeclaration;exports.isTSExternalModuleReference=isTSExternalModuleReference;exports.isTSNonNullExpression=isTSNonNullExpression;exports.isTSExportAssignment=isTSExportAssignment;exports.isTSNamespaceExportDeclaration=isTSNamespaceExportDeclaration;exports.isTSTypeAnnotation=isTSTypeAnnotation;exports.isTSTypeParameterInstantiation=isTSTypeParameterInstantiation;exports.isTSTypeParameterDeclaration=isTSTypeParameterDeclaration;exports.isTSTypeParameter=isTSTypeParameter;exports.isExpression=isExpression;exports.isBinary=isBinary;exports.isScopable=isScopable;exports.isBlockParent=isBlockParent;exports.isBlock=isBlock;exports.isStatement=isStatement;exports.isTerminatorless=isTerminatorless;exports.isCompletionStatement=isCompletionStatement;exports.isConditional=isConditional;exports.isLoop=isLoop;exports.isWhile=isWhile;exports.isExpressionWrapper=isExpressionWrapper;exports.isFor=isFor;exports.isForXStatement=isForXStatement;exports.isFunction=isFunction;exports.isFunctionParent=isFunctionParent;exports.isPureish=isPureish;exports.isDeclaration=isDeclaration;exports.isPatternLike=isPatternLike;exports.isLVal=isLVal;exports.isTSEntityName=isTSEntityName;exports.isLiteral=isLiteral;exports.isImmutable=isImmutable;exports.isUserWhitespacable=isUserWhitespacable;exports.isMethod=isMethod;exports.isObjectMember=isObjectMember;exports.isProperty=isProperty;exports.isUnaryLike=isUnaryLike;exports.isPattern=isPattern;exports.isClass=isClass;exports.isModuleDeclaration=isModuleDeclaration;exports.isExportDeclaration=isExportDeclaration;exports.isModuleSpecifier=isModuleSpecifier;exports.isFlow=isFlow;exports.isFlowType=isFlowType;exports.isFlowBaseAnnotation=isFlowBaseAnnotation;exports.isFlowDeclaration=isFlowDeclaration;exports.isFlowPredicate=isFlowPredicate;exports.isJSX=isJSX;exports.isPrivate=isPrivate;exports.isTSTypeElement=isTSTypeElement;exports.isTSType=isTSType;exports.isNumberLiteral=isNumberLiteral;exports.isRegexLiteral=isRegexLiteral;exports.isRestProperty=isRestProperty;exports.isSpreadProperty=isSpreadProperty;var _shallowEqual=_interopRequireDefault(__webpack_require__(368));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isArrayExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ArrayExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isAssignmentExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="AssignmentExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBinaryExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BinaryExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isInterpreterDirective(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="InterpreterDirective"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDirective(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Directive"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDirectiveLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DirectiveLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBlockStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BlockStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBreakStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BreakStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isCallExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="CallExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isCatchClause(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="CatchClause"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isConditionalExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ConditionalExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isContinueStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ContinueStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDebuggerStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DebuggerStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDoWhileStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DoWhileStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isEmptyStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="EmptyStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExpressionStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExpressionStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFile(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="File"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isForInStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ForInStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isForStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ForStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunctionDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FunctionDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunctionExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FunctionExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isIdentifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Identifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isIfStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="IfStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isLabeledStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="LabeledStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isStringLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="StringLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNumericLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NumericLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNullLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NullLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBooleanLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BooleanLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isRegExpLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="RegExpLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isLogicalExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="LogicalExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isMemberExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="MemberExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNewExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NewExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isProgram(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Program"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectMethod(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectMethod"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isRestElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="RestElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isReturnStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ReturnStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSequenceExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="SequenceExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isParenthesizedExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ParenthesizedExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSwitchCase(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="SwitchCase"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSwitchStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="SwitchStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isThisExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ThisExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isThrowStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ThrowStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTryStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TryStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isUnaryExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="UnaryExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isUpdateExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="UpdateExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isVariableDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="VariableDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isVariableDeclarator(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="VariableDeclarator"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isWhileStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="WhileStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isWithStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="WithStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isAssignmentPattern(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="AssignmentPattern"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isArrayPattern(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ArrayPattern"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isArrowFunctionExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ArrowFunctionExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassBody(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassBody"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportAllDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportAllDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportDefaultDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportDefaultDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportNamedDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportNamedDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isForOfStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ForOfStatement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImportDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ImportDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImportDefaultSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ImportDefaultSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImportNamespaceSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ImportNamespaceSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImportSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ImportSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isMetaProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="MetaProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassMethod(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassMethod"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectPattern(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectPattern"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSpreadElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="SpreadElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSuper(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Super"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTaggedTemplateExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TaggedTemplateExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTemplateElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TemplateElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTemplateLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TemplateLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isYieldExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="YieldExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isAnyTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="AnyTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isArrayTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ArrayTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBooleanTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BooleanTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBooleanLiteralTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BooleanLiteralTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNullLiteralTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NullLiteralTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassImplements(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassImplements"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareClass(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareClass"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareFunction(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareFunction"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareInterface(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareInterface"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareModule(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareModule"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareModuleExports(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareModuleExports"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareTypeAlias(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareTypeAlias"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareOpaqueType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareOpaqueType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareVariable(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareVariable"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareExportDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareExportDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclareExportAllDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclareExportAllDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclaredPredicate(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DeclaredPredicate"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExistsTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExistsTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunctionTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FunctionTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunctionTypeParam(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FunctionTypeParam"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isGenericTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="GenericTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isInferredPredicate(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="InferredPredicate"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isInterfaceExtends(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="InterfaceExtends"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isInterfaceDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="InterfaceDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isInterfaceTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="InterfaceTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isIntersectionTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="IntersectionTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isMixedTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="MixedTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isEmptyTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="EmptyTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNullableTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NullableTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNumberLiteralTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NumberLiteralTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNumberTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="NumberTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeInternalSlot(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeInternalSlot"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeCallProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeCallProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeIndexer(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeIndexer"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectTypeSpreadProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectTypeSpreadProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isOpaqueType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="OpaqueType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isQualifiedTypeIdentifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="QualifiedTypeIdentifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isStringLiteralTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="StringLiteralTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isStringTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="StringTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isThisTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ThisTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTupleTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TupleTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeofTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeofTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeAlias(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeAlias"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeCastExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeCastExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeParameter(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeParameter"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeParameterDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeParameterDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTypeParameterInstantiation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TypeParameterInstantiation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isUnionTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="UnionTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isVariance(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Variance"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isVoidTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="VoidTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXAttribute(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXAttribute"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXClosingElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXClosingElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXEmptyExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXEmptyExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXExpressionContainer(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXExpressionContainer"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXSpreadChild(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXSpreadChild"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXIdentifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXIdentifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXMemberExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXMemberExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXNamespacedName(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXNamespacedName"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXOpeningElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXOpeningElement"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXSpreadAttribute(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXSpreadAttribute"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXText(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXText"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXFragment(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXFragment"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXOpeningFragment(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXOpeningFragment"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSXClosingFragment(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSXClosingFragment"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNoop(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Noop"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPlaceholder(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Placeholder"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isArgumentPlaceholder(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ArgumentPlaceholder"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isAwaitExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="AwaitExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBindExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BindExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isOptionalMemberExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="OptionalMemberExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPipelineTopicExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="PipelineTopicExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPipelineBareFunction(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="PipelineBareFunction"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPipelinePrimaryTopicReference(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="PipelinePrimaryTopicReference"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isOptionalCallExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="OptionalCallExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassPrivateProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassPrivateProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClassPrivateMethod(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ClassPrivateMethod"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImport(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Import"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDecorator(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Decorator"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDoExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="DoExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportDefaultSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportDefaultSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportNamespaceSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportNamespaceSpecifier"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPrivateName(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="PrivateName"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBigIntLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BigIntLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSParameterProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSParameterProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSDeclareFunction(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSDeclareFunction"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSDeclareMethod(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSDeclareMethod"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSQualifiedName(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSQualifiedName"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSCallSignatureDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSCallSignatureDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSConstructSignatureDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSConstructSignatureDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSPropertySignature(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSPropertySignature"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSMethodSignature(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSMethodSignature"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSIndexSignature(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSIndexSignature"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSAnyKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSAnyKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSUnknownKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSUnknownKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSNumberKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSNumberKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSObjectKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSObjectKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSBooleanKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSBooleanKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSStringKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSStringKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSSymbolKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSSymbolKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSVoidKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSVoidKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSUndefinedKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSUndefinedKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSNullKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSNullKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSNeverKeyword(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSNeverKeyword"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSThisType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSThisType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSFunctionType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSFunctionType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSConstructorType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSConstructorType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeReference(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeReference"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypePredicate(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypePredicate"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeQuery(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeQuery"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSArrayType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSArrayType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTupleType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTupleType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSOptionalType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSOptionalType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSRestType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSRestType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSUnionType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSUnionType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSIntersectionType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSIntersectionType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSConditionalType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSConditionalType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSInferType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSInferType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSParenthesizedType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSParenthesizedType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeOperator(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeOperator"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSIndexedAccessType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSIndexedAccessType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSMappedType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSMappedType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSLiteralType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSLiteralType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSExpressionWithTypeArguments(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSExpressionWithTypeArguments"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSInterfaceDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSInterfaceDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSInterfaceBody(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSInterfaceBody"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeAliasDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeAliasDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSAsExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSAsExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeAssertion(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeAssertion"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSEnumDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSEnumDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSEnumMember(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSEnumMember"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSModuleDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSModuleDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSModuleBlock(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSModuleBlock"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSImportType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSImportType"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSImportEqualsDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSImportEqualsDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSExternalModuleReference(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSExternalModuleReference"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSNonNullExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSNonNullExpression"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSExportAssignment(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSExportAssignment"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSNamespaceExportDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSNamespaceExportDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeAnnotation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeParameterInstantiation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeParameterInstantiation"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeParameterDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeParameterDeclaration"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeParameter(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeParameter"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExpression(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Expression"||"ArrayExpression"===nodeType||"AssignmentExpression"===nodeType||"BinaryExpression"===nodeType||"CallExpression"===nodeType||"ConditionalExpression"===nodeType||"FunctionExpression"===nodeType||"Identifier"===nodeType||"StringLiteral"===nodeType||"NumericLiteral"===nodeType||"NullLiteral"===nodeType||"BooleanLiteral"===nodeType||"RegExpLiteral"===nodeType||"LogicalExpression"===nodeType||"MemberExpression"===nodeType||"NewExpression"===nodeType||"ObjectExpression"===nodeType||"SequenceExpression"===nodeType||"ParenthesizedExpression"===nodeType||"ThisExpression"===nodeType||"UnaryExpression"===nodeType||"UpdateExpression"===nodeType||"ArrowFunctionExpression"===nodeType||"ClassExpression"===nodeType||"MetaProperty"===nodeType||"Super"===nodeType||"TaggedTemplateExpression"===nodeType||"TemplateLiteral"===nodeType||"YieldExpression"===nodeType||"TypeCastExpression"===nodeType||"JSXElement"===nodeType||"JSXFragment"===nodeType||"AwaitExpression"===nodeType||"BindExpression"===nodeType||"OptionalMemberExpression"===nodeType||"PipelinePrimaryTopicReference"===nodeType||"OptionalCallExpression"===nodeType||"Import"===nodeType||"DoExpression"===nodeType||"BigIntLiteral"===nodeType||"TSAsExpression"===nodeType||"TSTypeAssertion"===nodeType||"TSNonNullExpression"===nodeType||nodeType==="Placeholder"&&("Expression"===node.expectedNode||"Identifier"===node.expectedNode||"StringLiteral"===node.expectedNode)){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBinary(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Binary"||"BinaryExpression"===nodeType||"LogicalExpression"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isScopable(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Scopable"||"BlockStatement"===nodeType||"CatchClause"===nodeType||"DoWhileStatement"===nodeType||"ForInStatement"===nodeType||"ForStatement"===nodeType||"FunctionDeclaration"===nodeType||"FunctionExpression"===nodeType||"Program"===nodeType||"ObjectMethod"===nodeType||"SwitchStatement"===nodeType||"WhileStatement"===nodeType||"ArrowFunctionExpression"===nodeType||"ClassDeclaration"===nodeType||"ClassExpression"===nodeType||"ForOfStatement"===nodeType||"ClassMethod"===nodeType||"ClassPrivateMethod"===nodeType||nodeType==="Placeholder"&&"BlockStatement"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBlockParent(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="BlockParent"||"BlockStatement"===nodeType||"CatchClause"===nodeType||"DoWhileStatement"===nodeType||"ForInStatement"===nodeType||"ForStatement"===nodeType||"FunctionDeclaration"===nodeType||"FunctionExpression"===nodeType||"Program"===nodeType||"ObjectMethod"===nodeType||"SwitchStatement"===nodeType||"WhileStatement"===nodeType||"ArrowFunctionExpression"===nodeType||"ForOfStatement"===nodeType||"ClassMethod"===nodeType||"ClassPrivateMethod"===nodeType||nodeType==="Placeholder"&&"BlockStatement"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isBlock(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Block"||"BlockStatement"===nodeType||"Program"===nodeType||nodeType==="Placeholder"&&"BlockStatement"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Statement"||"BlockStatement"===nodeType||"BreakStatement"===nodeType||"ContinueStatement"===nodeType||"DebuggerStatement"===nodeType||"DoWhileStatement"===nodeType||"EmptyStatement"===nodeType||"ExpressionStatement"===nodeType||"ForInStatement"===nodeType||"ForStatement"===nodeType||"FunctionDeclaration"===nodeType||"IfStatement"===nodeType||"LabeledStatement"===nodeType||"ReturnStatement"===nodeType||"SwitchStatement"===nodeType||"ThrowStatement"===nodeType||"TryStatement"===nodeType||"VariableDeclaration"===nodeType||"WhileStatement"===nodeType||"WithStatement"===nodeType||"ClassDeclaration"===nodeType||"ExportAllDeclaration"===nodeType||"ExportDefaultDeclaration"===nodeType||"ExportNamedDeclaration"===nodeType||"ForOfStatement"===nodeType||"ImportDeclaration"===nodeType||"DeclareClass"===nodeType||"DeclareFunction"===nodeType||"DeclareInterface"===nodeType||"DeclareModule"===nodeType||"DeclareModuleExports"===nodeType||"DeclareTypeAlias"===nodeType||"DeclareOpaqueType"===nodeType||"DeclareVariable"===nodeType||"DeclareExportDeclaration"===nodeType||"DeclareExportAllDeclaration"===nodeType||"InterfaceDeclaration"===nodeType||"OpaqueType"===nodeType||"TypeAlias"===nodeType||"TSDeclareFunction"===nodeType||"TSInterfaceDeclaration"===nodeType||"TSTypeAliasDeclaration"===nodeType||"TSEnumDeclaration"===nodeType||"TSModuleDeclaration"===nodeType||"TSImportEqualsDeclaration"===nodeType||"TSExportAssignment"===nodeType||"TSNamespaceExportDeclaration"===nodeType||nodeType==="Placeholder"&&("Statement"===node.expectedNode||"Declaration"===node.expectedNode||"BlockStatement"===node.expectedNode)){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTerminatorless(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Terminatorless"||"BreakStatement"===nodeType||"ContinueStatement"===nodeType||"ReturnStatement"===nodeType||"ThrowStatement"===nodeType||"YieldExpression"===nodeType||"AwaitExpression"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isCompletionStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="CompletionStatement"||"BreakStatement"===nodeType||"ContinueStatement"===nodeType||"ReturnStatement"===nodeType||"ThrowStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isConditional(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Conditional"||"ConditionalExpression"===nodeType||"IfStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isLoop(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Loop"||"DoWhileStatement"===nodeType||"ForInStatement"===nodeType||"ForStatement"===nodeType||"WhileStatement"===nodeType||"ForOfStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isWhile(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="While"||"DoWhileStatement"===nodeType||"WhileStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExpressionWrapper(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExpressionWrapper"||"ExpressionStatement"===nodeType||"ParenthesizedExpression"===nodeType||"TypeCastExpression"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFor(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="For"||"ForInStatement"===nodeType||"ForStatement"===nodeType||"ForOfStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isForXStatement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ForXStatement"||"ForInStatement"===nodeType||"ForOfStatement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunction(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Function"||"FunctionDeclaration"===nodeType||"FunctionExpression"===nodeType||"ObjectMethod"===nodeType||"ArrowFunctionExpression"===nodeType||"ClassMethod"===nodeType||"ClassPrivateMethod"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFunctionParent(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FunctionParent"||"FunctionDeclaration"===nodeType||"FunctionExpression"===nodeType||"ObjectMethod"===nodeType||"ArrowFunctionExpression"===nodeType||"ClassMethod"===nodeType||"ClassPrivateMethod"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPureish(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Pureish"||"FunctionDeclaration"===nodeType||"FunctionExpression"===nodeType||"StringLiteral"===nodeType||"NumericLiteral"===nodeType||"NullLiteral"===nodeType||"BooleanLiteral"===nodeType||"ArrowFunctionExpression"===nodeType||"ClassDeclaration"===nodeType||"ClassExpression"===nodeType||"BigIntLiteral"===nodeType||nodeType==="Placeholder"&&"StringLiteral"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Declaration"||"FunctionDeclaration"===nodeType||"VariableDeclaration"===nodeType||"ClassDeclaration"===nodeType||"ExportAllDeclaration"===nodeType||"ExportDefaultDeclaration"===nodeType||"ExportNamedDeclaration"===nodeType||"ImportDeclaration"===nodeType||"DeclareClass"===nodeType||"DeclareFunction"===nodeType||"DeclareInterface"===nodeType||"DeclareModule"===nodeType||"DeclareModuleExports"===nodeType||"DeclareTypeAlias"===nodeType||"DeclareOpaqueType"===nodeType||"DeclareVariable"===nodeType||"DeclareExportDeclaration"===nodeType||"DeclareExportAllDeclaration"===nodeType||"InterfaceDeclaration"===nodeType||"OpaqueType"===nodeType||"TypeAlias"===nodeType||"TSDeclareFunction"===nodeType||"TSInterfaceDeclaration"===nodeType||"TSTypeAliasDeclaration"===nodeType||"TSEnumDeclaration"===nodeType||"TSModuleDeclaration"===nodeType||nodeType==="Placeholder"&&"Declaration"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPatternLike(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="PatternLike"||"Identifier"===nodeType||"RestElement"===nodeType||"AssignmentPattern"===nodeType||"ArrayPattern"===nodeType||"ObjectPattern"===nodeType||nodeType==="Placeholder"&&("Pattern"===node.expectedNode||"Identifier"===node.expectedNode)){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isLVal(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="LVal"||"Identifier"===nodeType||"MemberExpression"===nodeType||"RestElement"===nodeType||"AssignmentPattern"===nodeType||"ArrayPattern"===nodeType||"ObjectPattern"===nodeType||"TSParameterProperty"===nodeType||nodeType==="Placeholder"&&("Pattern"===node.expectedNode||"Identifier"===node.expectedNode)){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSEntityName(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSEntityName"||"Identifier"===nodeType||"TSQualifiedName"===nodeType||nodeType==="Placeholder"&&"Identifier"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isLiteral(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Literal"||"StringLiteral"===nodeType||"NumericLiteral"===nodeType||"NullLiteral"===nodeType||"BooleanLiteral"===nodeType||"RegExpLiteral"===nodeType||"TemplateLiteral"===nodeType||"BigIntLiteral"===nodeType||nodeType==="Placeholder"&&"StringLiteral"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isImmutable(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Immutable"||"StringLiteral"===nodeType||"NumericLiteral"===nodeType||"NullLiteral"===nodeType||"BooleanLiteral"===nodeType||"JSXAttribute"===nodeType||"JSXClosingElement"===nodeType||"JSXElement"===nodeType||"JSXExpressionContainer"===nodeType||"JSXSpreadChild"===nodeType||"JSXOpeningElement"===nodeType||"JSXText"===nodeType||"JSXFragment"===nodeType||"JSXOpeningFragment"===nodeType||"JSXClosingFragment"===nodeType||"BigIntLiteral"===nodeType||nodeType==="Placeholder"&&"StringLiteral"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isUserWhitespacable(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="UserWhitespacable"||"ObjectMethod"===nodeType||"ObjectProperty"===nodeType||"ObjectTypeInternalSlot"===nodeType||"ObjectTypeCallProperty"===nodeType||"ObjectTypeIndexer"===nodeType||"ObjectTypeProperty"===nodeType||"ObjectTypeSpreadProperty"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isMethod(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Method"||"ObjectMethod"===nodeType||"ClassMethod"===nodeType||"ClassPrivateMethod"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isObjectMember(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ObjectMember"||"ObjectMethod"===nodeType||"ObjectProperty"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isProperty(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Property"||"ObjectProperty"===nodeType||"ClassProperty"===nodeType||"ClassPrivateProperty"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isUnaryLike(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="UnaryLike"||"UnaryExpression"===nodeType||"SpreadElement"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPattern(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Pattern"||"AssignmentPattern"===nodeType||"ArrayPattern"===nodeType||"ObjectPattern"===nodeType||nodeType==="Placeholder"&&"Pattern"===node.expectedNode){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isClass(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Class"||"ClassDeclaration"===nodeType||"ClassExpression"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isModuleDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ModuleDeclaration"||"ExportAllDeclaration"===nodeType||"ExportDefaultDeclaration"===nodeType||"ExportNamedDeclaration"===nodeType||"ImportDeclaration"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isExportDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ExportDeclaration"||"ExportAllDeclaration"===nodeType||"ExportDefaultDeclaration"===nodeType||"ExportNamedDeclaration"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isModuleSpecifier(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="ModuleSpecifier"||"ExportSpecifier"===nodeType||"ImportDefaultSpecifier"===nodeType||"ImportNamespaceSpecifier"===nodeType||"ImportSpecifier"===nodeType||"ExportDefaultSpecifier"===nodeType||"ExportNamespaceSpecifier"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFlow(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Flow"||"AnyTypeAnnotation"===nodeType||"ArrayTypeAnnotation"===nodeType||"BooleanTypeAnnotation"===nodeType||"BooleanLiteralTypeAnnotation"===nodeType||"NullLiteralTypeAnnotation"===nodeType||"ClassImplements"===nodeType||"DeclareClass"===nodeType||"DeclareFunction"===nodeType||"DeclareInterface"===nodeType||"DeclareModule"===nodeType||"DeclareModuleExports"===nodeType||"DeclareTypeAlias"===nodeType||"DeclareOpaqueType"===nodeType||"DeclareVariable"===nodeType||"DeclareExportDeclaration"===nodeType||"DeclareExportAllDeclaration"===nodeType||"DeclaredPredicate"===nodeType||"ExistsTypeAnnotation"===nodeType||"FunctionTypeAnnotation"===nodeType||"FunctionTypeParam"===nodeType||"GenericTypeAnnotation"===nodeType||"InferredPredicate"===nodeType||"InterfaceExtends"===nodeType||"InterfaceDeclaration"===nodeType||"InterfaceTypeAnnotation"===nodeType||"IntersectionTypeAnnotation"===nodeType||"MixedTypeAnnotation"===nodeType||"EmptyTypeAnnotation"===nodeType||"NullableTypeAnnotation"===nodeType||"NumberLiteralTypeAnnotation"===nodeType||"NumberTypeAnnotation"===nodeType||"ObjectTypeAnnotation"===nodeType||"ObjectTypeInternalSlot"===nodeType||"ObjectTypeCallProperty"===nodeType||"ObjectTypeIndexer"===nodeType||"ObjectTypeProperty"===nodeType||"ObjectTypeSpreadProperty"===nodeType||"OpaqueType"===nodeType||"QualifiedTypeIdentifier"===nodeType||"StringLiteralTypeAnnotation"===nodeType||"StringTypeAnnotation"===nodeType||"ThisTypeAnnotation"===nodeType||"TupleTypeAnnotation"===nodeType||"TypeofTypeAnnotation"===nodeType||"TypeAlias"===nodeType||"TypeAnnotation"===nodeType||"TypeCastExpression"===nodeType||"TypeParameter"===nodeType||"TypeParameterDeclaration"===nodeType||"TypeParameterInstantiation"===nodeType||"UnionTypeAnnotation"===nodeType||"Variance"===nodeType||"VoidTypeAnnotation"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFlowType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FlowType"||"AnyTypeAnnotation"===nodeType||"ArrayTypeAnnotation"===nodeType||"BooleanTypeAnnotation"===nodeType||"BooleanLiteralTypeAnnotation"===nodeType||"NullLiteralTypeAnnotation"===nodeType||"ExistsTypeAnnotation"===nodeType||"FunctionTypeAnnotation"===nodeType||"GenericTypeAnnotation"===nodeType||"InterfaceTypeAnnotation"===nodeType||"IntersectionTypeAnnotation"===nodeType||"MixedTypeAnnotation"===nodeType||"EmptyTypeAnnotation"===nodeType||"NullableTypeAnnotation"===nodeType||"NumberLiteralTypeAnnotation"===nodeType||"NumberTypeAnnotation"===nodeType||"ObjectTypeAnnotation"===nodeType||"StringLiteralTypeAnnotation"===nodeType||"StringTypeAnnotation"===nodeType||"ThisTypeAnnotation"===nodeType||"TupleTypeAnnotation"===nodeType||"TypeofTypeAnnotation"===nodeType||"UnionTypeAnnotation"===nodeType||"VoidTypeAnnotation"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFlowBaseAnnotation(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FlowBaseAnnotation"||"AnyTypeAnnotation"===nodeType||"BooleanTypeAnnotation"===nodeType||"NullLiteralTypeAnnotation"===nodeType||"MixedTypeAnnotation"===nodeType||"EmptyTypeAnnotation"===nodeType||"NumberTypeAnnotation"===nodeType||"StringTypeAnnotation"===nodeType||"ThisTypeAnnotation"===nodeType||"VoidTypeAnnotation"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFlowDeclaration(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FlowDeclaration"||"DeclareClass"===nodeType||"DeclareFunction"===nodeType||"DeclareInterface"===nodeType||"DeclareModule"===nodeType||"DeclareModuleExports"===nodeType||"DeclareTypeAlias"===nodeType||"DeclareOpaqueType"===nodeType||"DeclareVariable"===nodeType||"DeclareExportDeclaration"===nodeType||"DeclareExportAllDeclaration"===nodeType||"InterfaceDeclaration"===nodeType||"OpaqueType"===nodeType||"TypeAlias"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isFlowPredicate(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="FlowPredicate"||"DeclaredPredicate"===nodeType||"InferredPredicate"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isJSX(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="JSX"||"JSXAttribute"===nodeType||"JSXClosingElement"===nodeType||"JSXElement"===nodeType||"JSXEmptyExpression"===nodeType||"JSXExpressionContainer"===nodeType||"JSXSpreadChild"===nodeType||"JSXIdentifier"===nodeType||"JSXMemberExpression"===nodeType||"JSXNamespacedName"===nodeType||"JSXOpeningElement"===nodeType||"JSXSpreadAttribute"===nodeType||"JSXText"===nodeType||"JSXFragment"===nodeType||"JSXOpeningFragment"===nodeType||"JSXClosingFragment"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isPrivate(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="Private"||"ClassPrivateProperty"===nodeType||"ClassPrivateMethod"===nodeType||"PrivateName"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSTypeElement(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSTypeElement"||"TSCallSignatureDeclaration"===nodeType||"TSConstructSignatureDeclaration"===nodeType||"TSPropertySignature"===nodeType||"TSMethodSignature"===nodeType||"TSIndexSignature"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isTSType(node,opts){if(!node)return false;var nodeType=node.type;if(nodeType==="TSType"||"TSAnyKeyword"===nodeType||"TSUnknownKeyword"===nodeType||"TSNumberKeyword"===nodeType||"TSObjectKeyword"===nodeType||"TSBooleanKeyword"===nodeType||"TSStringKeyword"===nodeType||"TSSymbolKeyword"===nodeType||"TSVoidKeyword"===nodeType||"TSUndefinedKeyword"===nodeType||"TSNullKeyword"===nodeType||"TSNeverKeyword"===nodeType||"TSThisType"===nodeType||"TSFunctionType"===nodeType||"TSConstructorType"===nodeType||"TSTypeReference"===nodeType||"TSTypePredicate"===nodeType||"TSTypeQuery"===nodeType||"TSTypeLiteral"===nodeType||"TSArrayType"===nodeType||"TSTupleType"===nodeType||"TSOptionalType"===nodeType||"TSRestType"===nodeType||"TSUnionType"===nodeType||"TSIntersectionType"===nodeType||"TSConditionalType"===nodeType||"TSInferType"===nodeType||"TSParenthesizedType"===nodeType||"TSTypeOperator"===nodeType||"TSIndexedAccessType"===nodeType||"TSMappedType"===nodeType||"TSLiteralType"===nodeType||"TSExpressionWithTypeArguments"===nodeType||"TSImportType"===nodeType){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isNumberLiteral(node,opts){console.trace("The node type NumberLiteral has been renamed to NumericLiteral");if(!node)return false;var nodeType=node.type;if(nodeType==="NumberLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isRegexLiteral(node,opts){console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");if(!node)return false;var nodeType=node.type;if(nodeType==="RegexLiteral"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isRestProperty(node,opts){console.trace("The node type RestProperty has been renamed to RestElement");if(!node)return false;var nodeType=node.type;if(nodeType==="RestProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}function isSpreadProperty(node,opts){console.trace("The node type SpreadProperty has been renamed to SpreadElement");if(!node)return false;var nodeType=node.type;if(nodeType==="SpreadProperty"){if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}return false;}

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"VISITOR_KEYS",{enumerable:true,get:function get(){return _utils.VISITOR_KEYS;}});Object.defineProperty(exports,"ALIAS_KEYS",{enumerable:true,get:function get(){return _utils.ALIAS_KEYS;}});Object.defineProperty(exports,"FLIPPED_ALIAS_KEYS",{enumerable:true,get:function get(){return _utils.FLIPPED_ALIAS_KEYS;}});Object.defineProperty(exports,"NODE_FIELDS",{enumerable:true,get:function get(){return _utils.NODE_FIELDS;}});Object.defineProperty(exports,"BUILDER_KEYS",{enumerable:true,get:function get(){return _utils.BUILDER_KEYS;}});Object.defineProperty(exports,"DEPRECATED_KEYS",{enumerable:true,get:function get(){return _utils.DEPRECATED_KEYS;}});Object.defineProperty(exports,"PLACEHOLDERS",{enumerable:true,get:function get(){return _placeholders.PLACEHOLDERS;}});Object.defineProperty(exports,"PLACEHOLDERS_ALIAS",{enumerable:true,get:function get(){return _placeholders.PLACEHOLDERS_ALIAS;}});Object.defineProperty(exports,"PLACEHOLDERS_FLIPPED_ALIAS",{enumerable:true,get:function get(){return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;}});exports.TYPES=void 0;function _toFastProperties(){var data=_interopRequireDefault(__webpack_require__(543));_toFastProperties=function _toFastProperties(){return data;};return data;}__webpack_require__(378);__webpack_require__(381);__webpack_require__(547);__webpack_require__(548);__webpack_require__(549);__webpack_require__(550);__webpack_require__(551);var _utils=__webpack_require__(347);var _placeholders=__webpack_require__(414);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_toFastProperties().default)(_utils.VISITOR_KEYS);(0,_toFastProperties().default)(_utils.ALIAS_KEYS);(0,_toFastProperties().default)(_utils.FLIPPED_ALIAS_KEYS);(0,_toFastProperties().default)(_utils.NODE_FIELDS);(0,_toFastProperties().default)(_utils.BUILDER_KEYS);(0,_toFastProperties().default)(_utils.DEPRECATED_KEYS);(0,_toFastProperties().default)(_placeholders.PLACEHOLDERS_ALIAS);(0,_toFastProperties().default)(_placeholders.PLACEHOLDERS_FLIPPED_ALIAS);var TYPES=Object.keys(_utils.VISITOR_KEYS).concat(Object.keys(_utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(_utils.DEPRECATED_KEYS));exports.TYPES=TYPES;

/***/ }),
/* 342 */,
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.arrayExpression=exports.ArrayExpression=ArrayExpression;exports.assignmentExpression=exports.AssignmentExpression=AssignmentExpression;exports.binaryExpression=exports.BinaryExpression=BinaryExpression;exports.interpreterDirective=exports.InterpreterDirective=InterpreterDirective;exports.directive=exports.Directive=Directive;exports.directiveLiteral=exports.DirectiveLiteral=DirectiveLiteral;exports.blockStatement=exports.BlockStatement=BlockStatement;exports.breakStatement=exports.BreakStatement=BreakStatement;exports.callExpression=exports.CallExpression=CallExpression;exports.catchClause=exports.CatchClause=CatchClause;exports.conditionalExpression=exports.ConditionalExpression=ConditionalExpression;exports.continueStatement=exports.ContinueStatement=ContinueStatement;exports.debuggerStatement=exports.DebuggerStatement=DebuggerStatement;exports.doWhileStatement=exports.DoWhileStatement=DoWhileStatement;exports.emptyStatement=exports.EmptyStatement=EmptyStatement;exports.expressionStatement=exports.ExpressionStatement=ExpressionStatement;exports.file=exports.File=File;exports.forInStatement=exports.ForInStatement=ForInStatement;exports.forStatement=exports.ForStatement=ForStatement;exports.functionDeclaration=exports.FunctionDeclaration=FunctionDeclaration;exports.functionExpression=exports.FunctionExpression=FunctionExpression;exports.identifier=exports.Identifier=Identifier;exports.ifStatement=exports.IfStatement=IfStatement;exports.labeledStatement=exports.LabeledStatement=LabeledStatement;exports.stringLiteral=exports.StringLiteral=StringLiteral;exports.numericLiteral=exports.NumericLiteral=NumericLiteral;exports.nullLiteral=exports.NullLiteral=NullLiteral;exports.booleanLiteral=exports.BooleanLiteral=BooleanLiteral;exports.regExpLiteral=exports.RegExpLiteral=RegExpLiteral;exports.logicalExpression=exports.LogicalExpression=LogicalExpression;exports.memberExpression=exports.MemberExpression=MemberExpression;exports.newExpression=exports.NewExpression=NewExpression;exports.program=exports.Program=Program;exports.objectExpression=exports.ObjectExpression=ObjectExpression;exports.objectMethod=exports.ObjectMethod=ObjectMethod;exports.objectProperty=exports.ObjectProperty=ObjectProperty;exports.restElement=exports.RestElement=RestElement;exports.returnStatement=exports.ReturnStatement=ReturnStatement;exports.sequenceExpression=exports.SequenceExpression=SequenceExpression;exports.parenthesizedExpression=exports.ParenthesizedExpression=ParenthesizedExpression;exports.switchCase=exports.SwitchCase=SwitchCase;exports.switchStatement=exports.SwitchStatement=SwitchStatement;exports.thisExpression=exports.ThisExpression=ThisExpression;exports.throwStatement=exports.ThrowStatement=ThrowStatement;exports.tryStatement=exports.TryStatement=TryStatement;exports.unaryExpression=exports.UnaryExpression=UnaryExpression;exports.updateExpression=exports.UpdateExpression=UpdateExpression;exports.variableDeclaration=exports.VariableDeclaration=VariableDeclaration;exports.variableDeclarator=exports.VariableDeclarator=VariableDeclarator;exports.whileStatement=exports.WhileStatement=WhileStatement;exports.withStatement=exports.WithStatement=WithStatement;exports.assignmentPattern=exports.AssignmentPattern=AssignmentPattern;exports.arrayPattern=exports.ArrayPattern=ArrayPattern;exports.arrowFunctionExpression=exports.ArrowFunctionExpression=ArrowFunctionExpression;exports.classBody=exports.ClassBody=ClassBody;exports.classDeclaration=exports.ClassDeclaration=ClassDeclaration;exports.classExpression=exports.ClassExpression=ClassExpression;exports.exportAllDeclaration=exports.ExportAllDeclaration=ExportAllDeclaration;exports.exportDefaultDeclaration=exports.ExportDefaultDeclaration=ExportDefaultDeclaration;exports.exportNamedDeclaration=exports.ExportNamedDeclaration=ExportNamedDeclaration;exports.exportSpecifier=exports.ExportSpecifier=ExportSpecifier;exports.forOfStatement=exports.ForOfStatement=ForOfStatement;exports.importDeclaration=exports.ImportDeclaration=ImportDeclaration;exports.importDefaultSpecifier=exports.ImportDefaultSpecifier=ImportDefaultSpecifier;exports.importNamespaceSpecifier=exports.ImportNamespaceSpecifier=ImportNamespaceSpecifier;exports.importSpecifier=exports.ImportSpecifier=ImportSpecifier;exports.metaProperty=exports.MetaProperty=MetaProperty;exports.classMethod=exports.ClassMethod=ClassMethod;exports.objectPattern=exports.ObjectPattern=ObjectPattern;exports.spreadElement=exports.SpreadElement=SpreadElement;exports.super=exports.Super=Super;exports.taggedTemplateExpression=exports.TaggedTemplateExpression=TaggedTemplateExpression;exports.templateElement=exports.TemplateElement=TemplateElement;exports.templateLiteral=exports.TemplateLiteral=TemplateLiteral;exports.yieldExpression=exports.YieldExpression=YieldExpression;exports.anyTypeAnnotation=exports.AnyTypeAnnotation=AnyTypeAnnotation;exports.arrayTypeAnnotation=exports.ArrayTypeAnnotation=ArrayTypeAnnotation;exports.booleanTypeAnnotation=exports.BooleanTypeAnnotation=BooleanTypeAnnotation;exports.booleanLiteralTypeAnnotation=exports.BooleanLiteralTypeAnnotation=BooleanLiteralTypeAnnotation;exports.nullLiteralTypeAnnotation=exports.NullLiteralTypeAnnotation=NullLiteralTypeAnnotation;exports.classImplements=exports.ClassImplements=ClassImplements;exports.declareClass=exports.DeclareClass=DeclareClass;exports.declareFunction=exports.DeclareFunction=DeclareFunction;exports.declareInterface=exports.DeclareInterface=DeclareInterface;exports.declareModule=exports.DeclareModule=DeclareModule;exports.declareModuleExports=exports.DeclareModuleExports=DeclareModuleExports;exports.declareTypeAlias=exports.DeclareTypeAlias=DeclareTypeAlias;exports.declareOpaqueType=exports.DeclareOpaqueType=DeclareOpaqueType;exports.declareVariable=exports.DeclareVariable=DeclareVariable;exports.declareExportDeclaration=exports.DeclareExportDeclaration=DeclareExportDeclaration;exports.declareExportAllDeclaration=exports.DeclareExportAllDeclaration=DeclareExportAllDeclaration;exports.declaredPredicate=exports.DeclaredPredicate=DeclaredPredicate;exports.existsTypeAnnotation=exports.ExistsTypeAnnotation=ExistsTypeAnnotation;exports.functionTypeAnnotation=exports.FunctionTypeAnnotation=FunctionTypeAnnotation;exports.functionTypeParam=exports.FunctionTypeParam=FunctionTypeParam;exports.genericTypeAnnotation=exports.GenericTypeAnnotation=GenericTypeAnnotation;exports.inferredPredicate=exports.InferredPredicate=InferredPredicate;exports.interfaceExtends=exports.InterfaceExtends=InterfaceExtends;exports.interfaceDeclaration=exports.InterfaceDeclaration=InterfaceDeclaration;exports.interfaceTypeAnnotation=exports.InterfaceTypeAnnotation=InterfaceTypeAnnotation;exports.intersectionTypeAnnotation=exports.IntersectionTypeAnnotation=IntersectionTypeAnnotation;exports.mixedTypeAnnotation=exports.MixedTypeAnnotation=MixedTypeAnnotation;exports.emptyTypeAnnotation=exports.EmptyTypeAnnotation=EmptyTypeAnnotation;exports.nullableTypeAnnotation=exports.NullableTypeAnnotation=NullableTypeAnnotation;exports.numberLiteralTypeAnnotation=exports.NumberLiteralTypeAnnotation=NumberLiteralTypeAnnotation;exports.numberTypeAnnotation=exports.NumberTypeAnnotation=NumberTypeAnnotation;exports.objectTypeAnnotation=exports.ObjectTypeAnnotation=ObjectTypeAnnotation;exports.objectTypeInternalSlot=exports.ObjectTypeInternalSlot=ObjectTypeInternalSlot;exports.objectTypeCallProperty=exports.ObjectTypeCallProperty=ObjectTypeCallProperty;exports.objectTypeIndexer=exports.ObjectTypeIndexer=ObjectTypeIndexer;exports.objectTypeProperty=exports.ObjectTypeProperty=ObjectTypeProperty;exports.objectTypeSpreadProperty=exports.ObjectTypeSpreadProperty=ObjectTypeSpreadProperty;exports.opaqueType=exports.OpaqueType=OpaqueType;exports.qualifiedTypeIdentifier=exports.QualifiedTypeIdentifier=QualifiedTypeIdentifier;exports.stringLiteralTypeAnnotation=exports.StringLiteralTypeAnnotation=StringLiteralTypeAnnotation;exports.stringTypeAnnotation=exports.StringTypeAnnotation=StringTypeAnnotation;exports.thisTypeAnnotation=exports.ThisTypeAnnotation=ThisTypeAnnotation;exports.tupleTypeAnnotation=exports.TupleTypeAnnotation=TupleTypeAnnotation;exports.typeofTypeAnnotation=exports.TypeofTypeAnnotation=TypeofTypeAnnotation;exports.typeAlias=exports.TypeAlias=TypeAlias;exports.typeAnnotation=exports.TypeAnnotation=TypeAnnotation;exports.typeCastExpression=exports.TypeCastExpression=TypeCastExpression;exports.typeParameter=exports.TypeParameter=TypeParameter;exports.typeParameterDeclaration=exports.TypeParameterDeclaration=TypeParameterDeclaration;exports.typeParameterInstantiation=exports.TypeParameterInstantiation=TypeParameterInstantiation;exports.unionTypeAnnotation=exports.UnionTypeAnnotation=UnionTypeAnnotation;exports.variance=exports.Variance=Variance;exports.voidTypeAnnotation=exports.VoidTypeAnnotation=VoidTypeAnnotation;exports.jSXAttribute=exports.jsxAttribute=exports.JSXAttribute=JSXAttribute;exports.jSXClosingElement=exports.jsxClosingElement=exports.JSXClosingElement=JSXClosingElement;exports.jSXElement=exports.jsxElement=exports.JSXElement=JSXElement;exports.jSXEmptyExpression=exports.jsxEmptyExpression=exports.JSXEmptyExpression=JSXEmptyExpression;exports.jSXExpressionContainer=exports.jsxExpressionContainer=exports.JSXExpressionContainer=JSXExpressionContainer;exports.jSXSpreadChild=exports.jsxSpreadChild=exports.JSXSpreadChild=JSXSpreadChild;exports.jSXIdentifier=exports.jsxIdentifier=exports.JSXIdentifier=JSXIdentifier;exports.jSXMemberExpression=exports.jsxMemberExpression=exports.JSXMemberExpression=JSXMemberExpression;exports.jSXNamespacedName=exports.jsxNamespacedName=exports.JSXNamespacedName=JSXNamespacedName;exports.jSXOpeningElement=exports.jsxOpeningElement=exports.JSXOpeningElement=JSXOpeningElement;exports.jSXSpreadAttribute=exports.jsxSpreadAttribute=exports.JSXSpreadAttribute=JSXSpreadAttribute;exports.jSXText=exports.jsxText=exports.JSXText=JSXText;exports.jSXFragment=exports.jsxFragment=exports.JSXFragment=JSXFragment;exports.jSXOpeningFragment=exports.jsxOpeningFragment=exports.JSXOpeningFragment=JSXOpeningFragment;exports.jSXClosingFragment=exports.jsxClosingFragment=exports.JSXClosingFragment=JSXClosingFragment;exports.noop=exports.Noop=Noop;exports.placeholder=exports.Placeholder=Placeholder;exports.argumentPlaceholder=exports.ArgumentPlaceholder=ArgumentPlaceholder;exports.awaitExpression=exports.AwaitExpression=AwaitExpression;exports.bindExpression=exports.BindExpression=BindExpression;exports.classProperty=exports.ClassProperty=ClassProperty;exports.optionalMemberExpression=exports.OptionalMemberExpression=OptionalMemberExpression;exports.pipelineTopicExpression=exports.PipelineTopicExpression=PipelineTopicExpression;exports.pipelineBareFunction=exports.PipelineBareFunction=PipelineBareFunction;exports.pipelinePrimaryTopicReference=exports.PipelinePrimaryTopicReference=PipelinePrimaryTopicReference;exports.optionalCallExpression=exports.OptionalCallExpression=OptionalCallExpression;exports.classPrivateProperty=exports.ClassPrivateProperty=ClassPrivateProperty;exports.classPrivateMethod=exports.ClassPrivateMethod=ClassPrivateMethod;exports.import=exports.Import=Import;exports.decorator=exports.Decorator=Decorator;exports.doExpression=exports.DoExpression=DoExpression;exports.exportDefaultSpecifier=exports.ExportDefaultSpecifier=ExportDefaultSpecifier;exports.exportNamespaceSpecifier=exports.ExportNamespaceSpecifier=ExportNamespaceSpecifier;exports.privateName=exports.PrivateName=PrivateName;exports.bigIntLiteral=exports.BigIntLiteral=BigIntLiteral;exports.tSParameterProperty=exports.tsParameterProperty=exports.TSParameterProperty=TSParameterProperty;exports.tSDeclareFunction=exports.tsDeclareFunction=exports.TSDeclareFunction=TSDeclareFunction;exports.tSDeclareMethod=exports.tsDeclareMethod=exports.TSDeclareMethod=TSDeclareMethod;exports.tSQualifiedName=exports.tsQualifiedName=exports.TSQualifiedName=TSQualifiedName;exports.tSCallSignatureDeclaration=exports.tsCallSignatureDeclaration=exports.TSCallSignatureDeclaration=TSCallSignatureDeclaration;exports.tSConstructSignatureDeclaration=exports.tsConstructSignatureDeclaration=exports.TSConstructSignatureDeclaration=TSConstructSignatureDeclaration;exports.tSPropertySignature=exports.tsPropertySignature=exports.TSPropertySignature=TSPropertySignature;exports.tSMethodSignature=exports.tsMethodSignature=exports.TSMethodSignature=TSMethodSignature;exports.tSIndexSignature=exports.tsIndexSignature=exports.TSIndexSignature=TSIndexSignature;exports.tSAnyKeyword=exports.tsAnyKeyword=exports.TSAnyKeyword=TSAnyKeyword;exports.tSUnknownKeyword=exports.tsUnknownKeyword=exports.TSUnknownKeyword=TSUnknownKeyword;exports.tSNumberKeyword=exports.tsNumberKeyword=exports.TSNumberKeyword=TSNumberKeyword;exports.tSObjectKeyword=exports.tsObjectKeyword=exports.TSObjectKeyword=TSObjectKeyword;exports.tSBooleanKeyword=exports.tsBooleanKeyword=exports.TSBooleanKeyword=TSBooleanKeyword;exports.tSStringKeyword=exports.tsStringKeyword=exports.TSStringKeyword=TSStringKeyword;exports.tSSymbolKeyword=exports.tsSymbolKeyword=exports.TSSymbolKeyword=TSSymbolKeyword;exports.tSVoidKeyword=exports.tsVoidKeyword=exports.TSVoidKeyword=TSVoidKeyword;exports.tSUndefinedKeyword=exports.tsUndefinedKeyword=exports.TSUndefinedKeyword=TSUndefinedKeyword;exports.tSNullKeyword=exports.tsNullKeyword=exports.TSNullKeyword=TSNullKeyword;exports.tSNeverKeyword=exports.tsNeverKeyword=exports.TSNeverKeyword=TSNeverKeyword;exports.tSThisType=exports.tsThisType=exports.TSThisType=TSThisType;exports.tSFunctionType=exports.tsFunctionType=exports.TSFunctionType=TSFunctionType;exports.tSConstructorType=exports.tsConstructorType=exports.TSConstructorType=TSConstructorType;exports.tSTypeReference=exports.tsTypeReference=exports.TSTypeReference=TSTypeReference;exports.tSTypePredicate=exports.tsTypePredicate=exports.TSTypePredicate=TSTypePredicate;exports.tSTypeQuery=exports.tsTypeQuery=exports.TSTypeQuery=TSTypeQuery;exports.tSTypeLiteral=exports.tsTypeLiteral=exports.TSTypeLiteral=TSTypeLiteral;exports.tSArrayType=exports.tsArrayType=exports.TSArrayType=TSArrayType;exports.tSTupleType=exports.tsTupleType=exports.TSTupleType=TSTupleType;exports.tSOptionalType=exports.tsOptionalType=exports.TSOptionalType=TSOptionalType;exports.tSRestType=exports.tsRestType=exports.TSRestType=TSRestType;exports.tSUnionType=exports.tsUnionType=exports.TSUnionType=TSUnionType;exports.tSIntersectionType=exports.tsIntersectionType=exports.TSIntersectionType=TSIntersectionType;exports.tSConditionalType=exports.tsConditionalType=exports.TSConditionalType=TSConditionalType;exports.tSInferType=exports.tsInferType=exports.TSInferType=TSInferType;exports.tSParenthesizedType=exports.tsParenthesizedType=exports.TSParenthesizedType=TSParenthesizedType;exports.tSTypeOperator=exports.tsTypeOperator=exports.TSTypeOperator=TSTypeOperator;exports.tSIndexedAccessType=exports.tsIndexedAccessType=exports.TSIndexedAccessType=TSIndexedAccessType;exports.tSMappedType=exports.tsMappedType=exports.TSMappedType=TSMappedType;exports.tSLiteralType=exports.tsLiteralType=exports.TSLiteralType=TSLiteralType;exports.tSExpressionWithTypeArguments=exports.tsExpressionWithTypeArguments=exports.TSExpressionWithTypeArguments=TSExpressionWithTypeArguments;exports.tSInterfaceDeclaration=exports.tsInterfaceDeclaration=exports.TSInterfaceDeclaration=TSInterfaceDeclaration;exports.tSInterfaceBody=exports.tsInterfaceBody=exports.TSInterfaceBody=TSInterfaceBody;exports.tSTypeAliasDeclaration=exports.tsTypeAliasDeclaration=exports.TSTypeAliasDeclaration=TSTypeAliasDeclaration;exports.tSAsExpression=exports.tsAsExpression=exports.TSAsExpression=TSAsExpression;exports.tSTypeAssertion=exports.tsTypeAssertion=exports.TSTypeAssertion=TSTypeAssertion;exports.tSEnumDeclaration=exports.tsEnumDeclaration=exports.TSEnumDeclaration=TSEnumDeclaration;exports.tSEnumMember=exports.tsEnumMember=exports.TSEnumMember=TSEnumMember;exports.tSModuleDeclaration=exports.tsModuleDeclaration=exports.TSModuleDeclaration=TSModuleDeclaration;exports.tSModuleBlock=exports.tsModuleBlock=exports.TSModuleBlock=TSModuleBlock;exports.tSImportType=exports.tsImportType=exports.TSImportType=TSImportType;exports.tSImportEqualsDeclaration=exports.tsImportEqualsDeclaration=exports.TSImportEqualsDeclaration=TSImportEqualsDeclaration;exports.tSExternalModuleReference=exports.tsExternalModuleReference=exports.TSExternalModuleReference=TSExternalModuleReference;exports.tSNonNullExpression=exports.tsNonNullExpression=exports.TSNonNullExpression=TSNonNullExpression;exports.tSExportAssignment=exports.tsExportAssignment=exports.TSExportAssignment=TSExportAssignment;exports.tSNamespaceExportDeclaration=exports.tsNamespaceExportDeclaration=exports.TSNamespaceExportDeclaration=TSNamespaceExportDeclaration;exports.tSTypeAnnotation=exports.tsTypeAnnotation=exports.TSTypeAnnotation=TSTypeAnnotation;exports.tSTypeParameterInstantiation=exports.tsTypeParameterInstantiation=exports.TSTypeParameterInstantiation=TSTypeParameterInstantiation;exports.tSTypeParameterDeclaration=exports.tsTypeParameterDeclaration=exports.TSTypeParameterDeclaration=TSTypeParameterDeclaration;exports.tSTypeParameter=exports.tsTypeParameter=exports.TSTypeParameter=TSTypeParameter;exports.numberLiteral=exports.NumberLiteral=NumberLiteral;exports.regexLiteral=exports.RegexLiteral=RegexLiteral;exports.restProperty=exports.RestProperty=RestProperty;exports.spreadProperty=exports.SpreadProperty=SpreadProperty;var _builder=_interopRequireDefault(__webpack_require__(473));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function ArrayExpression(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(0,_builder.default).apply(void 0,["ArrayExpression"].concat(args));}function AssignmentExpression(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return(0,_builder.default).apply(void 0,["AssignmentExpression"].concat(args));}function BinaryExpression(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return(0,_builder.default).apply(void 0,["BinaryExpression"].concat(args));}function InterpreterDirective(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return(0,_builder.default).apply(void 0,["InterpreterDirective"].concat(args));}function Directive(){for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}return(0,_builder.default).apply(void 0,["Directive"].concat(args));}function DirectiveLiteral(){for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}return(0,_builder.default).apply(void 0,["DirectiveLiteral"].concat(args));}function BlockStatement(){for(var _len7=arguments.length,args=new Array(_len7),_key7=0;_key7<_len7;_key7++){args[_key7]=arguments[_key7];}return(0,_builder.default).apply(void 0,["BlockStatement"].concat(args));}function BreakStatement(){for(var _len8=arguments.length,args=new Array(_len8),_key8=0;_key8<_len8;_key8++){args[_key8]=arguments[_key8];}return(0,_builder.default).apply(void 0,["BreakStatement"].concat(args));}function CallExpression(){for(var _len9=arguments.length,args=new Array(_len9),_key9=0;_key9<_len9;_key9++){args[_key9]=arguments[_key9];}return(0,_builder.default).apply(void 0,["CallExpression"].concat(args));}function CatchClause(){for(var _len10=arguments.length,args=new Array(_len10),_key10=0;_key10<_len10;_key10++){args[_key10]=arguments[_key10];}return(0,_builder.default).apply(void 0,["CatchClause"].concat(args));}function ConditionalExpression(){for(var _len11=arguments.length,args=new Array(_len11),_key11=0;_key11<_len11;_key11++){args[_key11]=arguments[_key11];}return(0,_builder.default).apply(void 0,["ConditionalExpression"].concat(args));}function ContinueStatement(){for(var _len12=arguments.length,args=new Array(_len12),_key12=0;_key12<_len12;_key12++){args[_key12]=arguments[_key12];}return(0,_builder.default).apply(void 0,["ContinueStatement"].concat(args));}function DebuggerStatement(){for(var _len13=arguments.length,args=new Array(_len13),_key13=0;_key13<_len13;_key13++){args[_key13]=arguments[_key13];}return(0,_builder.default).apply(void 0,["DebuggerStatement"].concat(args));}function DoWhileStatement(){for(var _len14=arguments.length,args=new Array(_len14),_key14=0;_key14<_len14;_key14++){args[_key14]=arguments[_key14];}return(0,_builder.default).apply(void 0,["DoWhileStatement"].concat(args));}function EmptyStatement(){for(var _len15=arguments.length,args=new Array(_len15),_key15=0;_key15<_len15;_key15++){args[_key15]=arguments[_key15];}return(0,_builder.default).apply(void 0,["EmptyStatement"].concat(args));}function ExpressionStatement(){for(var _len16=arguments.length,args=new Array(_len16),_key16=0;_key16<_len16;_key16++){args[_key16]=arguments[_key16];}return(0,_builder.default).apply(void 0,["ExpressionStatement"].concat(args));}function File(){for(var _len17=arguments.length,args=new Array(_len17),_key17=0;_key17<_len17;_key17++){args[_key17]=arguments[_key17];}return(0,_builder.default).apply(void 0,["File"].concat(args));}function ForInStatement(){for(var _len18=arguments.length,args=new Array(_len18),_key18=0;_key18<_len18;_key18++){args[_key18]=arguments[_key18];}return(0,_builder.default).apply(void 0,["ForInStatement"].concat(args));}function ForStatement(){for(var _len19=arguments.length,args=new Array(_len19),_key19=0;_key19<_len19;_key19++){args[_key19]=arguments[_key19];}return(0,_builder.default).apply(void 0,["ForStatement"].concat(args));}function FunctionDeclaration(){for(var _len20=arguments.length,args=new Array(_len20),_key20=0;_key20<_len20;_key20++){args[_key20]=arguments[_key20];}return(0,_builder.default).apply(void 0,["FunctionDeclaration"].concat(args));}function FunctionExpression(){for(var _len21=arguments.length,args=new Array(_len21),_key21=0;_key21<_len21;_key21++){args[_key21]=arguments[_key21];}return(0,_builder.default).apply(void 0,["FunctionExpression"].concat(args));}function Identifier(){for(var _len22=arguments.length,args=new Array(_len22),_key22=0;_key22<_len22;_key22++){args[_key22]=arguments[_key22];}return(0,_builder.default).apply(void 0,["Identifier"].concat(args));}function IfStatement(){for(var _len23=arguments.length,args=new Array(_len23),_key23=0;_key23<_len23;_key23++){args[_key23]=arguments[_key23];}return(0,_builder.default).apply(void 0,["IfStatement"].concat(args));}function LabeledStatement(){for(var _len24=arguments.length,args=new Array(_len24),_key24=0;_key24<_len24;_key24++){args[_key24]=arguments[_key24];}return(0,_builder.default).apply(void 0,["LabeledStatement"].concat(args));}function StringLiteral(){for(var _len25=arguments.length,args=new Array(_len25),_key25=0;_key25<_len25;_key25++){args[_key25]=arguments[_key25];}return(0,_builder.default).apply(void 0,["StringLiteral"].concat(args));}function NumericLiteral(){for(var _len26=arguments.length,args=new Array(_len26),_key26=0;_key26<_len26;_key26++){args[_key26]=arguments[_key26];}return(0,_builder.default).apply(void 0,["NumericLiteral"].concat(args));}function NullLiteral(){for(var _len27=arguments.length,args=new Array(_len27),_key27=0;_key27<_len27;_key27++){args[_key27]=arguments[_key27];}return(0,_builder.default).apply(void 0,["NullLiteral"].concat(args));}function BooleanLiteral(){for(var _len28=arguments.length,args=new Array(_len28),_key28=0;_key28<_len28;_key28++){args[_key28]=arguments[_key28];}return(0,_builder.default).apply(void 0,["BooleanLiteral"].concat(args));}function RegExpLiteral(){for(var _len29=arguments.length,args=new Array(_len29),_key29=0;_key29<_len29;_key29++){args[_key29]=arguments[_key29];}return(0,_builder.default).apply(void 0,["RegExpLiteral"].concat(args));}function LogicalExpression(){for(var _len30=arguments.length,args=new Array(_len30),_key30=0;_key30<_len30;_key30++){args[_key30]=arguments[_key30];}return(0,_builder.default).apply(void 0,["LogicalExpression"].concat(args));}function MemberExpression(){for(var _len31=arguments.length,args=new Array(_len31),_key31=0;_key31<_len31;_key31++){args[_key31]=arguments[_key31];}return(0,_builder.default).apply(void 0,["MemberExpression"].concat(args));}function NewExpression(){for(var _len32=arguments.length,args=new Array(_len32),_key32=0;_key32<_len32;_key32++){args[_key32]=arguments[_key32];}return(0,_builder.default).apply(void 0,["NewExpression"].concat(args));}function Program(){for(var _len33=arguments.length,args=new Array(_len33),_key33=0;_key33<_len33;_key33++){args[_key33]=arguments[_key33];}return(0,_builder.default).apply(void 0,["Program"].concat(args));}function ObjectExpression(){for(var _len34=arguments.length,args=new Array(_len34),_key34=0;_key34<_len34;_key34++){args[_key34]=arguments[_key34];}return(0,_builder.default).apply(void 0,["ObjectExpression"].concat(args));}function ObjectMethod(){for(var _len35=arguments.length,args=new Array(_len35),_key35=0;_key35<_len35;_key35++){args[_key35]=arguments[_key35];}return(0,_builder.default).apply(void 0,["ObjectMethod"].concat(args));}function ObjectProperty(){for(var _len36=arguments.length,args=new Array(_len36),_key36=0;_key36<_len36;_key36++){args[_key36]=arguments[_key36];}return(0,_builder.default).apply(void 0,["ObjectProperty"].concat(args));}function RestElement(){for(var _len37=arguments.length,args=new Array(_len37),_key37=0;_key37<_len37;_key37++){args[_key37]=arguments[_key37];}return(0,_builder.default).apply(void 0,["RestElement"].concat(args));}function ReturnStatement(){for(var _len38=arguments.length,args=new Array(_len38),_key38=0;_key38<_len38;_key38++){args[_key38]=arguments[_key38];}return(0,_builder.default).apply(void 0,["ReturnStatement"].concat(args));}function SequenceExpression(){for(var _len39=arguments.length,args=new Array(_len39),_key39=0;_key39<_len39;_key39++){args[_key39]=arguments[_key39];}return(0,_builder.default).apply(void 0,["SequenceExpression"].concat(args));}function ParenthesizedExpression(){for(var _len40=arguments.length,args=new Array(_len40),_key40=0;_key40<_len40;_key40++){args[_key40]=arguments[_key40];}return(0,_builder.default).apply(void 0,["ParenthesizedExpression"].concat(args));}function SwitchCase(){for(var _len41=arguments.length,args=new Array(_len41),_key41=0;_key41<_len41;_key41++){args[_key41]=arguments[_key41];}return(0,_builder.default).apply(void 0,["SwitchCase"].concat(args));}function SwitchStatement(){for(var _len42=arguments.length,args=new Array(_len42),_key42=0;_key42<_len42;_key42++){args[_key42]=arguments[_key42];}return(0,_builder.default).apply(void 0,["SwitchStatement"].concat(args));}function ThisExpression(){for(var _len43=arguments.length,args=new Array(_len43),_key43=0;_key43<_len43;_key43++){args[_key43]=arguments[_key43];}return(0,_builder.default).apply(void 0,["ThisExpression"].concat(args));}function ThrowStatement(){for(var _len44=arguments.length,args=new Array(_len44),_key44=0;_key44<_len44;_key44++){args[_key44]=arguments[_key44];}return(0,_builder.default).apply(void 0,["ThrowStatement"].concat(args));}function TryStatement(){for(var _len45=arguments.length,args=new Array(_len45),_key45=0;_key45<_len45;_key45++){args[_key45]=arguments[_key45];}return(0,_builder.default).apply(void 0,["TryStatement"].concat(args));}function UnaryExpression(){for(var _len46=arguments.length,args=new Array(_len46),_key46=0;_key46<_len46;_key46++){args[_key46]=arguments[_key46];}return(0,_builder.default).apply(void 0,["UnaryExpression"].concat(args));}function UpdateExpression(){for(var _len47=arguments.length,args=new Array(_len47),_key47=0;_key47<_len47;_key47++){args[_key47]=arguments[_key47];}return(0,_builder.default).apply(void 0,["UpdateExpression"].concat(args));}function VariableDeclaration(){for(var _len48=arguments.length,args=new Array(_len48),_key48=0;_key48<_len48;_key48++){args[_key48]=arguments[_key48];}return(0,_builder.default).apply(void 0,["VariableDeclaration"].concat(args));}function VariableDeclarator(){for(var _len49=arguments.length,args=new Array(_len49),_key49=0;_key49<_len49;_key49++){args[_key49]=arguments[_key49];}return(0,_builder.default).apply(void 0,["VariableDeclarator"].concat(args));}function WhileStatement(){for(var _len50=arguments.length,args=new Array(_len50),_key50=0;_key50<_len50;_key50++){args[_key50]=arguments[_key50];}return(0,_builder.default).apply(void 0,["WhileStatement"].concat(args));}function WithStatement(){for(var _len51=arguments.length,args=new Array(_len51),_key51=0;_key51<_len51;_key51++){args[_key51]=arguments[_key51];}return(0,_builder.default).apply(void 0,["WithStatement"].concat(args));}function AssignmentPattern(){for(var _len52=arguments.length,args=new Array(_len52),_key52=0;_key52<_len52;_key52++){args[_key52]=arguments[_key52];}return(0,_builder.default).apply(void 0,["AssignmentPattern"].concat(args));}function ArrayPattern(){for(var _len53=arguments.length,args=new Array(_len53),_key53=0;_key53<_len53;_key53++){args[_key53]=arguments[_key53];}return(0,_builder.default).apply(void 0,["ArrayPattern"].concat(args));}function ArrowFunctionExpression(){for(var _len54=arguments.length,args=new Array(_len54),_key54=0;_key54<_len54;_key54++){args[_key54]=arguments[_key54];}return(0,_builder.default).apply(void 0,["ArrowFunctionExpression"].concat(args));}function ClassBody(){for(var _len55=arguments.length,args=new Array(_len55),_key55=0;_key55<_len55;_key55++){args[_key55]=arguments[_key55];}return(0,_builder.default).apply(void 0,["ClassBody"].concat(args));}function ClassDeclaration(){for(var _len56=arguments.length,args=new Array(_len56),_key56=0;_key56<_len56;_key56++){args[_key56]=arguments[_key56];}return(0,_builder.default).apply(void 0,["ClassDeclaration"].concat(args));}function ClassExpression(){for(var _len57=arguments.length,args=new Array(_len57),_key57=0;_key57<_len57;_key57++){args[_key57]=arguments[_key57];}return(0,_builder.default).apply(void 0,["ClassExpression"].concat(args));}function ExportAllDeclaration(){for(var _len58=arguments.length,args=new Array(_len58),_key58=0;_key58<_len58;_key58++){args[_key58]=arguments[_key58];}return(0,_builder.default).apply(void 0,["ExportAllDeclaration"].concat(args));}function ExportDefaultDeclaration(){for(var _len59=arguments.length,args=new Array(_len59),_key59=0;_key59<_len59;_key59++){args[_key59]=arguments[_key59];}return(0,_builder.default).apply(void 0,["ExportDefaultDeclaration"].concat(args));}function ExportNamedDeclaration(){for(var _len60=arguments.length,args=new Array(_len60),_key60=0;_key60<_len60;_key60++){args[_key60]=arguments[_key60];}return(0,_builder.default).apply(void 0,["ExportNamedDeclaration"].concat(args));}function ExportSpecifier(){for(var _len61=arguments.length,args=new Array(_len61),_key61=0;_key61<_len61;_key61++){args[_key61]=arguments[_key61];}return(0,_builder.default).apply(void 0,["ExportSpecifier"].concat(args));}function ForOfStatement(){for(var _len62=arguments.length,args=new Array(_len62),_key62=0;_key62<_len62;_key62++){args[_key62]=arguments[_key62];}return(0,_builder.default).apply(void 0,["ForOfStatement"].concat(args));}function ImportDeclaration(){for(var _len63=arguments.length,args=new Array(_len63),_key63=0;_key63<_len63;_key63++){args[_key63]=arguments[_key63];}return(0,_builder.default).apply(void 0,["ImportDeclaration"].concat(args));}function ImportDefaultSpecifier(){for(var _len64=arguments.length,args=new Array(_len64),_key64=0;_key64<_len64;_key64++){args[_key64]=arguments[_key64];}return(0,_builder.default).apply(void 0,["ImportDefaultSpecifier"].concat(args));}function ImportNamespaceSpecifier(){for(var _len65=arguments.length,args=new Array(_len65),_key65=0;_key65<_len65;_key65++){args[_key65]=arguments[_key65];}return(0,_builder.default).apply(void 0,["ImportNamespaceSpecifier"].concat(args));}function ImportSpecifier(){for(var _len66=arguments.length,args=new Array(_len66),_key66=0;_key66<_len66;_key66++){args[_key66]=arguments[_key66];}return(0,_builder.default).apply(void 0,["ImportSpecifier"].concat(args));}function MetaProperty(){for(var _len67=arguments.length,args=new Array(_len67),_key67=0;_key67<_len67;_key67++){args[_key67]=arguments[_key67];}return(0,_builder.default).apply(void 0,["MetaProperty"].concat(args));}function ClassMethod(){for(var _len68=arguments.length,args=new Array(_len68),_key68=0;_key68<_len68;_key68++){args[_key68]=arguments[_key68];}return(0,_builder.default).apply(void 0,["ClassMethod"].concat(args));}function ObjectPattern(){for(var _len69=arguments.length,args=new Array(_len69),_key69=0;_key69<_len69;_key69++){args[_key69]=arguments[_key69];}return(0,_builder.default).apply(void 0,["ObjectPattern"].concat(args));}function SpreadElement(){for(var _len70=arguments.length,args=new Array(_len70),_key70=0;_key70<_len70;_key70++){args[_key70]=arguments[_key70];}return(0,_builder.default).apply(void 0,["SpreadElement"].concat(args));}function Super(){for(var _len71=arguments.length,args=new Array(_len71),_key71=0;_key71<_len71;_key71++){args[_key71]=arguments[_key71];}return(0,_builder.default).apply(void 0,["Super"].concat(args));}function TaggedTemplateExpression(){for(var _len72=arguments.length,args=new Array(_len72),_key72=0;_key72<_len72;_key72++){args[_key72]=arguments[_key72];}return(0,_builder.default).apply(void 0,["TaggedTemplateExpression"].concat(args));}function TemplateElement(){for(var _len73=arguments.length,args=new Array(_len73),_key73=0;_key73<_len73;_key73++){args[_key73]=arguments[_key73];}return(0,_builder.default).apply(void 0,["TemplateElement"].concat(args));}function TemplateLiteral(){for(var _len74=arguments.length,args=new Array(_len74),_key74=0;_key74<_len74;_key74++){args[_key74]=arguments[_key74];}return(0,_builder.default).apply(void 0,["TemplateLiteral"].concat(args));}function YieldExpression(){for(var _len75=arguments.length,args=new Array(_len75),_key75=0;_key75<_len75;_key75++){args[_key75]=arguments[_key75];}return(0,_builder.default).apply(void 0,["YieldExpression"].concat(args));}function AnyTypeAnnotation(){for(var _len76=arguments.length,args=new Array(_len76),_key76=0;_key76<_len76;_key76++){args[_key76]=arguments[_key76];}return(0,_builder.default).apply(void 0,["AnyTypeAnnotation"].concat(args));}function ArrayTypeAnnotation(){for(var _len77=arguments.length,args=new Array(_len77),_key77=0;_key77<_len77;_key77++){args[_key77]=arguments[_key77];}return(0,_builder.default).apply(void 0,["ArrayTypeAnnotation"].concat(args));}function BooleanTypeAnnotation(){for(var _len78=arguments.length,args=new Array(_len78),_key78=0;_key78<_len78;_key78++){args[_key78]=arguments[_key78];}return(0,_builder.default).apply(void 0,["BooleanTypeAnnotation"].concat(args));}function BooleanLiteralTypeAnnotation(){for(var _len79=arguments.length,args=new Array(_len79),_key79=0;_key79<_len79;_key79++){args[_key79]=arguments[_key79];}return(0,_builder.default).apply(void 0,["BooleanLiteralTypeAnnotation"].concat(args));}function NullLiteralTypeAnnotation(){for(var _len80=arguments.length,args=new Array(_len80),_key80=0;_key80<_len80;_key80++){args[_key80]=arguments[_key80];}return(0,_builder.default).apply(void 0,["NullLiteralTypeAnnotation"].concat(args));}function ClassImplements(){for(var _len81=arguments.length,args=new Array(_len81),_key81=0;_key81<_len81;_key81++){args[_key81]=arguments[_key81];}return(0,_builder.default).apply(void 0,["ClassImplements"].concat(args));}function DeclareClass(){for(var _len82=arguments.length,args=new Array(_len82),_key82=0;_key82<_len82;_key82++){args[_key82]=arguments[_key82];}return(0,_builder.default).apply(void 0,["DeclareClass"].concat(args));}function DeclareFunction(){for(var _len83=arguments.length,args=new Array(_len83),_key83=0;_key83<_len83;_key83++){args[_key83]=arguments[_key83];}return(0,_builder.default).apply(void 0,["DeclareFunction"].concat(args));}function DeclareInterface(){for(var _len84=arguments.length,args=new Array(_len84),_key84=0;_key84<_len84;_key84++){args[_key84]=arguments[_key84];}return(0,_builder.default).apply(void 0,["DeclareInterface"].concat(args));}function DeclareModule(){for(var _len85=arguments.length,args=new Array(_len85),_key85=0;_key85<_len85;_key85++){args[_key85]=arguments[_key85];}return(0,_builder.default).apply(void 0,["DeclareModule"].concat(args));}function DeclareModuleExports(){for(var _len86=arguments.length,args=new Array(_len86),_key86=0;_key86<_len86;_key86++){args[_key86]=arguments[_key86];}return(0,_builder.default).apply(void 0,["DeclareModuleExports"].concat(args));}function DeclareTypeAlias(){for(var _len87=arguments.length,args=new Array(_len87),_key87=0;_key87<_len87;_key87++){args[_key87]=arguments[_key87];}return(0,_builder.default).apply(void 0,["DeclareTypeAlias"].concat(args));}function DeclareOpaqueType(){for(var _len88=arguments.length,args=new Array(_len88),_key88=0;_key88<_len88;_key88++){args[_key88]=arguments[_key88];}return(0,_builder.default).apply(void 0,["DeclareOpaqueType"].concat(args));}function DeclareVariable(){for(var _len89=arguments.length,args=new Array(_len89),_key89=0;_key89<_len89;_key89++){args[_key89]=arguments[_key89];}return(0,_builder.default).apply(void 0,["DeclareVariable"].concat(args));}function DeclareExportDeclaration(){for(var _len90=arguments.length,args=new Array(_len90),_key90=0;_key90<_len90;_key90++){args[_key90]=arguments[_key90];}return(0,_builder.default).apply(void 0,["DeclareExportDeclaration"].concat(args));}function DeclareExportAllDeclaration(){for(var _len91=arguments.length,args=new Array(_len91),_key91=0;_key91<_len91;_key91++){args[_key91]=arguments[_key91];}return(0,_builder.default).apply(void 0,["DeclareExportAllDeclaration"].concat(args));}function DeclaredPredicate(){for(var _len92=arguments.length,args=new Array(_len92),_key92=0;_key92<_len92;_key92++){args[_key92]=arguments[_key92];}return(0,_builder.default).apply(void 0,["DeclaredPredicate"].concat(args));}function ExistsTypeAnnotation(){for(var _len93=arguments.length,args=new Array(_len93),_key93=0;_key93<_len93;_key93++){args[_key93]=arguments[_key93];}return(0,_builder.default).apply(void 0,["ExistsTypeAnnotation"].concat(args));}function FunctionTypeAnnotation(){for(var _len94=arguments.length,args=new Array(_len94),_key94=0;_key94<_len94;_key94++){args[_key94]=arguments[_key94];}return(0,_builder.default).apply(void 0,["FunctionTypeAnnotation"].concat(args));}function FunctionTypeParam(){for(var _len95=arguments.length,args=new Array(_len95),_key95=0;_key95<_len95;_key95++){args[_key95]=arguments[_key95];}return(0,_builder.default).apply(void 0,["FunctionTypeParam"].concat(args));}function GenericTypeAnnotation(){for(var _len96=arguments.length,args=new Array(_len96),_key96=0;_key96<_len96;_key96++){args[_key96]=arguments[_key96];}return(0,_builder.default).apply(void 0,["GenericTypeAnnotation"].concat(args));}function InferredPredicate(){for(var _len97=arguments.length,args=new Array(_len97),_key97=0;_key97<_len97;_key97++){args[_key97]=arguments[_key97];}return(0,_builder.default).apply(void 0,["InferredPredicate"].concat(args));}function InterfaceExtends(){for(var _len98=arguments.length,args=new Array(_len98),_key98=0;_key98<_len98;_key98++){args[_key98]=arguments[_key98];}return(0,_builder.default).apply(void 0,["InterfaceExtends"].concat(args));}function InterfaceDeclaration(){for(var _len99=arguments.length,args=new Array(_len99),_key99=0;_key99<_len99;_key99++){args[_key99]=arguments[_key99];}return(0,_builder.default).apply(void 0,["InterfaceDeclaration"].concat(args));}function InterfaceTypeAnnotation(){for(var _len100=arguments.length,args=new Array(_len100),_key100=0;_key100<_len100;_key100++){args[_key100]=arguments[_key100];}return(0,_builder.default).apply(void 0,["InterfaceTypeAnnotation"].concat(args));}function IntersectionTypeAnnotation(){for(var _len101=arguments.length,args=new Array(_len101),_key101=0;_key101<_len101;_key101++){args[_key101]=arguments[_key101];}return(0,_builder.default).apply(void 0,["IntersectionTypeAnnotation"].concat(args));}function MixedTypeAnnotation(){for(var _len102=arguments.length,args=new Array(_len102),_key102=0;_key102<_len102;_key102++){args[_key102]=arguments[_key102];}return(0,_builder.default).apply(void 0,["MixedTypeAnnotation"].concat(args));}function EmptyTypeAnnotation(){for(var _len103=arguments.length,args=new Array(_len103),_key103=0;_key103<_len103;_key103++){args[_key103]=arguments[_key103];}return(0,_builder.default).apply(void 0,["EmptyTypeAnnotation"].concat(args));}function NullableTypeAnnotation(){for(var _len104=arguments.length,args=new Array(_len104),_key104=0;_key104<_len104;_key104++){args[_key104]=arguments[_key104];}return(0,_builder.default).apply(void 0,["NullableTypeAnnotation"].concat(args));}function NumberLiteralTypeAnnotation(){for(var _len105=arguments.length,args=new Array(_len105),_key105=0;_key105<_len105;_key105++){args[_key105]=arguments[_key105];}return(0,_builder.default).apply(void 0,["NumberLiteralTypeAnnotation"].concat(args));}function NumberTypeAnnotation(){for(var _len106=arguments.length,args=new Array(_len106),_key106=0;_key106<_len106;_key106++){args[_key106]=arguments[_key106];}return(0,_builder.default).apply(void 0,["NumberTypeAnnotation"].concat(args));}function ObjectTypeAnnotation(){for(var _len107=arguments.length,args=new Array(_len107),_key107=0;_key107<_len107;_key107++){args[_key107]=arguments[_key107];}return(0,_builder.default).apply(void 0,["ObjectTypeAnnotation"].concat(args));}function ObjectTypeInternalSlot(){for(var _len108=arguments.length,args=new Array(_len108),_key108=0;_key108<_len108;_key108++){args[_key108]=arguments[_key108];}return(0,_builder.default).apply(void 0,["ObjectTypeInternalSlot"].concat(args));}function ObjectTypeCallProperty(){for(var _len109=arguments.length,args=new Array(_len109),_key109=0;_key109<_len109;_key109++){args[_key109]=arguments[_key109];}return(0,_builder.default).apply(void 0,["ObjectTypeCallProperty"].concat(args));}function ObjectTypeIndexer(){for(var _len110=arguments.length,args=new Array(_len110),_key110=0;_key110<_len110;_key110++){args[_key110]=arguments[_key110];}return(0,_builder.default).apply(void 0,["ObjectTypeIndexer"].concat(args));}function ObjectTypeProperty(){for(var _len111=arguments.length,args=new Array(_len111),_key111=0;_key111<_len111;_key111++){args[_key111]=arguments[_key111];}return(0,_builder.default).apply(void 0,["ObjectTypeProperty"].concat(args));}function ObjectTypeSpreadProperty(){for(var _len112=arguments.length,args=new Array(_len112),_key112=0;_key112<_len112;_key112++){args[_key112]=arguments[_key112];}return(0,_builder.default).apply(void 0,["ObjectTypeSpreadProperty"].concat(args));}function OpaqueType(){for(var _len113=arguments.length,args=new Array(_len113),_key113=0;_key113<_len113;_key113++){args[_key113]=arguments[_key113];}return(0,_builder.default).apply(void 0,["OpaqueType"].concat(args));}function QualifiedTypeIdentifier(){for(var _len114=arguments.length,args=new Array(_len114),_key114=0;_key114<_len114;_key114++){args[_key114]=arguments[_key114];}return(0,_builder.default).apply(void 0,["QualifiedTypeIdentifier"].concat(args));}function StringLiteralTypeAnnotation(){for(var _len115=arguments.length,args=new Array(_len115),_key115=0;_key115<_len115;_key115++){args[_key115]=arguments[_key115];}return(0,_builder.default).apply(void 0,["StringLiteralTypeAnnotation"].concat(args));}function StringTypeAnnotation(){for(var _len116=arguments.length,args=new Array(_len116),_key116=0;_key116<_len116;_key116++){args[_key116]=arguments[_key116];}return(0,_builder.default).apply(void 0,["StringTypeAnnotation"].concat(args));}function ThisTypeAnnotation(){for(var _len117=arguments.length,args=new Array(_len117),_key117=0;_key117<_len117;_key117++){args[_key117]=arguments[_key117];}return(0,_builder.default).apply(void 0,["ThisTypeAnnotation"].concat(args));}function TupleTypeAnnotation(){for(var _len118=arguments.length,args=new Array(_len118),_key118=0;_key118<_len118;_key118++){args[_key118]=arguments[_key118];}return(0,_builder.default).apply(void 0,["TupleTypeAnnotation"].concat(args));}function TypeofTypeAnnotation(){for(var _len119=arguments.length,args=new Array(_len119),_key119=0;_key119<_len119;_key119++){args[_key119]=arguments[_key119];}return(0,_builder.default).apply(void 0,["TypeofTypeAnnotation"].concat(args));}function TypeAlias(){for(var _len120=arguments.length,args=new Array(_len120),_key120=0;_key120<_len120;_key120++){args[_key120]=arguments[_key120];}return(0,_builder.default).apply(void 0,["TypeAlias"].concat(args));}function TypeAnnotation(){for(var _len121=arguments.length,args=new Array(_len121),_key121=0;_key121<_len121;_key121++){args[_key121]=arguments[_key121];}return(0,_builder.default).apply(void 0,["TypeAnnotation"].concat(args));}function TypeCastExpression(){for(var _len122=arguments.length,args=new Array(_len122),_key122=0;_key122<_len122;_key122++){args[_key122]=arguments[_key122];}return(0,_builder.default).apply(void 0,["TypeCastExpression"].concat(args));}function TypeParameter(){for(var _len123=arguments.length,args=new Array(_len123),_key123=0;_key123<_len123;_key123++){args[_key123]=arguments[_key123];}return(0,_builder.default).apply(void 0,["TypeParameter"].concat(args));}function TypeParameterDeclaration(){for(var _len124=arguments.length,args=new Array(_len124),_key124=0;_key124<_len124;_key124++){args[_key124]=arguments[_key124];}return(0,_builder.default).apply(void 0,["TypeParameterDeclaration"].concat(args));}function TypeParameterInstantiation(){for(var _len125=arguments.length,args=new Array(_len125),_key125=0;_key125<_len125;_key125++){args[_key125]=arguments[_key125];}return(0,_builder.default).apply(void 0,["TypeParameterInstantiation"].concat(args));}function UnionTypeAnnotation(){for(var _len126=arguments.length,args=new Array(_len126),_key126=0;_key126<_len126;_key126++){args[_key126]=arguments[_key126];}return(0,_builder.default).apply(void 0,["UnionTypeAnnotation"].concat(args));}function Variance(){for(var _len127=arguments.length,args=new Array(_len127),_key127=0;_key127<_len127;_key127++){args[_key127]=arguments[_key127];}return(0,_builder.default).apply(void 0,["Variance"].concat(args));}function VoidTypeAnnotation(){for(var _len128=arguments.length,args=new Array(_len128),_key128=0;_key128<_len128;_key128++){args[_key128]=arguments[_key128];}return(0,_builder.default).apply(void 0,["VoidTypeAnnotation"].concat(args));}function JSXAttribute(){for(var _len129=arguments.length,args=new Array(_len129),_key129=0;_key129<_len129;_key129++){args[_key129]=arguments[_key129];}return(0,_builder.default).apply(void 0,["JSXAttribute"].concat(args));}function JSXClosingElement(){for(var _len130=arguments.length,args=new Array(_len130),_key130=0;_key130<_len130;_key130++){args[_key130]=arguments[_key130];}return(0,_builder.default).apply(void 0,["JSXClosingElement"].concat(args));}function JSXElement(){for(var _len131=arguments.length,args=new Array(_len131),_key131=0;_key131<_len131;_key131++){args[_key131]=arguments[_key131];}return(0,_builder.default).apply(void 0,["JSXElement"].concat(args));}function JSXEmptyExpression(){for(var _len132=arguments.length,args=new Array(_len132),_key132=0;_key132<_len132;_key132++){args[_key132]=arguments[_key132];}return(0,_builder.default).apply(void 0,["JSXEmptyExpression"].concat(args));}function JSXExpressionContainer(){for(var _len133=arguments.length,args=new Array(_len133),_key133=0;_key133<_len133;_key133++){args[_key133]=arguments[_key133];}return(0,_builder.default).apply(void 0,["JSXExpressionContainer"].concat(args));}function JSXSpreadChild(){for(var _len134=arguments.length,args=new Array(_len134),_key134=0;_key134<_len134;_key134++){args[_key134]=arguments[_key134];}return(0,_builder.default).apply(void 0,["JSXSpreadChild"].concat(args));}function JSXIdentifier(){for(var _len135=arguments.length,args=new Array(_len135),_key135=0;_key135<_len135;_key135++){args[_key135]=arguments[_key135];}return(0,_builder.default).apply(void 0,["JSXIdentifier"].concat(args));}function JSXMemberExpression(){for(var _len136=arguments.length,args=new Array(_len136),_key136=0;_key136<_len136;_key136++){args[_key136]=arguments[_key136];}return(0,_builder.default).apply(void 0,["JSXMemberExpression"].concat(args));}function JSXNamespacedName(){for(var _len137=arguments.length,args=new Array(_len137),_key137=0;_key137<_len137;_key137++){args[_key137]=arguments[_key137];}return(0,_builder.default).apply(void 0,["JSXNamespacedName"].concat(args));}function JSXOpeningElement(){for(var _len138=arguments.length,args=new Array(_len138),_key138=0;_key138<_len138;_key138++){args[_key138]=arguments[_key138];}return(0,_builder.default).apply(void 0,["JSXOpeningElement"].concat(args));}function JSXSpreadAttribute(){for(var _len139=arguments.length,args=new Array(_len139),_key139=0;_key139<_len139;_key139++){args[_key139]=arguments[_key139];}return(0,_builder.default).apply(void 0,["JSXSpreadAttribute"].concat(args));}function JSXText(){for(var _len140=arguments.length,args=new Array(_len140),_key140=0;_key140<_len140;_key140++){args[_key140]=arguments[_key140];}return(0,_builder.default).apply(void 0,["JSXText"].concat(args));}function JSXFragment(){for(var _len141=arguments.length,args=new Array(_len141),_key141=0;_key141<_len141;_key141++){args[_key141]=arguments[_key141];}return(0,_builder.default).apply(void 0,["JSXFragment"].concat(args));}function JSXOpeningFragment(){for(var _len142=arguments.length,args=new Array(_len142),_key142=0;_key142<_len142;_key142++){args[_key142]=arguments[_key142];}return(0,_builder.default).apply(void 0,["JSXOpeningFragment"].concat(args));}function JSXClosingFragment(){for(var _len143=arguments.length,args=new Array(_len143),_key143=0;_key143<_len143;_key143++){args[_key143]=arguments[_key143];}return(0,_builder.default).apply(void 0,["JSXClosingFragment"].concat(args));}function Noop(){for(var _len144=arguments.length,args=new Array(_len144),_key144=0;_key144<_len144;_key144++){args[_key144]=arguments[_key144];}return(0,_builder.default).apply(void 0,["Noop"].concat(args));}function Placeholder(){for(var _len145=arguments.length,args=new Array(_len145),_key145=0;_key145<_len145;_key145++){args[_key145]=arguments[_key145];}return(0,_builder.default).apply(void 0,["Placeholder"].concat(args));}function ArgumentPlaceholder(){for(var _len146=arguments.length,args=new Array(_len146),_key146=0;_key146<_len146;_key146++){args[_key146]=arguments[_key146];}return(0,_builder.default).apply(void 0,["ArgumentPlaceholder"].concat(args));}function AwaitExpression(){for(var _len147=arguments.length,args=new Array(_len147),_key147=0;_key147<_len147;_key147++){args[_key147]=arguments[_key147];}return(0,_builder.default).apply(void 0,["AwaitExpression"].concat(args));}function BindExpression(){for(var _len148=arguments.length,args=new Array(_len148),_key148=0;_key148<_len148;_key148++){args[_key148]=arguments[_key148];}return(0,_builder.default).apply(void 0,["BindExpression"].concat(args));}function ClassProperty(){for(var _len149=arguments.length,args=new Array(_len149),_key149=0;_key149<_len149;_key149++){args[_key149]=arguments[_key149];}return(0,_builder.default).apply(void 0,["ClassProperty"].concat(args));}function OptionalMemberExpression(){for(var _len150=arguments.length,args=new Array(_len150),_key150=0;_key150<_len150;_key150++){args[_key150]=arguments[_key150];}return(0,_builder.default).apply(void 0,["OptionalMemberExpression"].concat(args));}function PipelineTopicExpression(){for(var _len151=arguments.length,args=new Array(_len151),_key151=0;_key151<_len151;_key151++){args[_key151]=arguments[_key151];}return(0,_builder.default).apply(void 0,["PipelineTopicExpression"].concat(args));}function PipelineBareFunction(){for(var _len152=arguments.length,args=new Array(_len152),_key152=0;_key152<_len152;_key152++){args[_key152]=arguments[_key152];}return(0,_builder.default).apply(void 0,["PipelineBareFunction"].concat(args));}function PipelinePrimaryTopicReference(){for(var _len153=arguments.length,args=new Array(_len153),_key153=0;_key153<_len153;_key153++){args[_key153]=arguments[_key153];}return(0,_builder.default).apply(void 0,["PipelinePrimaryTopicReference"].concat(args));}function OptionalCallExpression(){for(var _len154=arguments.length,args=new Array(_len154),_key154=0;_key154<_len154;_key154++){args[_key154]=arguments[_key154];}return(0,_builder.default).apply(void 0,["OptionalCallExpression"].concat(args));}function ClassPrivateProperty(){for(var _len155=arguments.length,args=new Array(_len155),_key155=0;_key155<_len155;_key155++){args[_key155]=arguments[_key155];}return(0,_builder.default).apply(void 0,["ClassPrivateProperty"].concat(args));}function ClassPrivateMethod(){for(var _len156=arguments.length,args=new Array(_len156),_key156=0;_key156<_len156;_key156++){args[_key156]=arguments[_key156];}return(0,_builder.default).apply(void 0,["ClassPrivateMethod"].concat(args));}function Import(){for(var _len157=arguments.length,args=new Array(_len157),_key157=0;_key157<_len157;_key157++){args[_key157]=arguments[_key157];}return(0,_builder.default).apply(void 0,["Import"].concat(args));}function Decorator(){for(var _len158=arguments.length,args=new Array(_len158),_key158=0;_key158<_len158;_key158++){args[_key158]=arguments[_key158];}return(0,_builder.default).apply(void 0,["Decorator"].concat(args));}function DoExpression(){for(var _len159=arguments.length,args=new Array(_len159),_key159=0;_key159<_len159;_key159++){args[_key159]=arguments[_key159];}return(0,_builder.default).apply(void 0,["DoExpression"].concat(args));}function ExportDefaultSpecifier(){for(var _len160=arguments.length,args=new Array(_len160),_key160=0;_key160<_len160;_key160++){args[_key160]=arguments[_key160];}return(0,_builder.default).apply(void 0,["ExportDefaultSpecifier"].concat(args));}function ExportNamespaceSpecifier(){for(var _len161=arguments.length,args=new Array(_len161),_key161=0;_key161<_len161;_key161++){args[_key161]=arguments[_key161];}return(0,_builder.default).apply(void 0,["ExportNamespaceSpecifier"].concat(args));}function PrivateName(){for(var _len162=arguments.length,args=new Array(_len162),_key162=0;_key162<_len162;_key162++){args[_key162]=arguments[_key162];}return(0,_builder.default).apply(void 0,["PrivateName"].concat(args));}function BigIntLiteral(){for(var _len163=arguments.length,args=new Array(_len163),_key163=0;_key163<_len163;_key163++){args[_key163]=arguments[_key163];}return(0,_builder.default).apply(void 0,["BigIntLiteral"].concat(args));}function TSParameterProperty(){for(var _len164=arguments.length,args=new Array(_len164),_key164=0;_key164<_len164;_key164++){args[_key164]=arguments[_key164];}return(0,_builder.default).apply(void 0,["TSParameterProperty"].concat(args));}function TSDeclareFunction(){for(var _len165=arguments.length,args=new Array(_len165),_key165=0;_key165<_len165;_key165++){args[_key165]=arguments[_key165];}return(0,_builder.default).apply(void 0,["TSDeclareFunction"].concat(args));}function TSDeclareMethod(){for(var _len166=arguments.length,args=new Array(_len166),_key166=0;_key166<_len166;_key166++){args[_key166]=arguments[_key166];}return(0,_builder.default).apply(void 0,["TSDeclareMethod"].concat(args));}function TSQualifiedName(){for(var _len167=arguments.length,args=new Array(_len167),_key167=0;_key167<_len167;_key167++){args[_key167]=arguments[_key167];}return(0,_builder.default).apply(void 0,["TSQualifiedName"].concat(args));}function TSCallSignatureDeclaration(){for(var _len168=arguments.length,args=new Array(_len168),_key168=0;_key168<_len168;_key168++){args[_key168]=arguments[_key168];}return(0,_builder.default).apply(void 0,["TSCallSignatureDeclaration"].concat(args));}function TSConstructSignatureDeclaration(){for(var _len169=arguments.length,args=new Array(_len169),_key169=0;_key169<_len169;_key169++){args[_key169]=arguments[_key169];}return(0,_builder.default).apply(void 0,["TSConstructSignatureDeclaration"].concat(args));}function TSPropertySignature(){for(var _len170=arguments.length,args=new Array(_len170),_key170=0;_key170<_len170;_key170++){args[_key170]=arguments[_key170];}return(0,_builder.default).apply(void 0,["TSPropertySignature"].concat(args));}function TSMethodSignature(){for(var _len171=arguments.length,args=new Array(_len171),_key171=0;_key171<_len171;_key171++){args[_key171]=arguments[_key171];}return(0,_builder.default).apply(void 0,["TSMethodSignature"].concat(args));}function TSIndexSignature(){for(var _len172=arguments.length,args=new Array(_len172),_key172=0;_key172<_len172;_key172++){args[_key172]=arguments[_key172];}return(0,_builder.default).apply(void 0,["TSIndexSignature"].concat(args));}function TSAnyKeyword(){for(var _len173=arguments.length,args=new Array(_len173),_key173=0;_key173<_len173;_key173++){args[_key173]=arguments[_key173];}return(0,_builder.default).apply(void 0,["TSAnyKeyword"].concat(args));}function TSUnknownKeyword(){for(var _len174=arguments.length,args=new Array(_len174),_key174=0;_key174<_len174;_key174++){args[_key174]=arguments[_key174];}return(0,_builder.default).apply(void 0,["TSUnknownKeyword"].concat(args));}function TSNumberKeyword(){for(var _len175=arguments.length,args=new Array(_len175),_key175=0;_key175<_len175;_key175++){args[_key175]=arguments[_key175];}return(0,_builder.default).apply(void 0,["TSNumberKeyword"].concat(args));}function TSObjectKeyword(){for(var _len176=arguments.length,args=new Array(_len176),_key176=0;_key176<_len176;_key176++){args[_key176]=arguments[_key176];}return(0,_builder.default).apply(void 0,["TSObjectKeyword"].concat(args));}function TSBooleanKeyword(){for(var _len177=arguments.length,args=new Array(_len177),_key177=0;_key177<_len177;_key177++){args[_key177]=arguments[_key177];}return(0,_builder.default).apply(void 0,["TSBooleanKeyword"].concat(args));}function TSStringKeyword(){for(var _len178=arguments.length,args=new Array(_len178),_key178=0;_key178<_len178;_key178++){args[_key178]=arguments[_key178];}return(0,_builder.default).apply(void 0,["TSStringKeyword"].concat(args));}function TSSymbolKeyword(){for(var _len179=arguments.length,args=new Array(_len179),_key179=0;_key179<_len179;_key179++){args[_key179]=arguments[_key179];}return(0,_builder.default).apply(void 0,["TSSymbolKeyword"].concat(args));}function TSVoidKeyword(){for(var _len180=arguments.length,args=new Array(_len180),_key180=0;_key180<_len180;_key180++){args[_key180]=arguments[_key180];}return(0,_builder.default).apply(void 0,["TSVoidKeyword"].concat(args));}function TSUndefinedKeyword(){for(var _len181=arguments.length,args=new Array(_len181),_key181=0;_key181<_len181;_key181++){args[_key181]=arguments[_key181];}return(0,_builder.default).apply(void 0,["TSUndefinedKeyword"].concat(args));}function TSNullKeyword(){for(var _len182=arguments.length,args=new Array(_len182),_key182=0;_key182<_len182;_key182++){args[_key182]=arguments[_key182];}return(0,_builder.default).apply(void 0,["TSNullKeyword"].concat(args));}function TSNeverKeyword(){for(var _len183=arguments.length,args=new Array(_len183),_key183=0;_key183<_len183;_key183++){args[_key183]=arguments[_key183];}return(0,_builder.default).apply(void 0,["TSNeverKeyword"].concat(args));}function TSThisType(){for(var _len184=arguments.length,args=new Array(_len184),_key184=0;_key184<_len184;_key184++){args[_key184]=arguments[_key184];}return(0,_builder.default).apply(void 0,["TSThisType"].concat(args));}function TSFunctionType(){for(var _len185=arguments.length,args=new Array(_len185),_key185=0;_key185<_len185;_key185++){args[_key185]=arguments[_key185];}return(0,_builder.default).apply(void 0,["TSFunctionType"].concat(args));}function TSConstructorType(){for(var _len186=arguments.length,args=new Array(_len186),_key186=0;_key186<_len186;_key186++){args[_key186]=arguments[_key186];}return(0,_builder.default).apply(void 0,["TSConstructorType"].concat(args));}function TSTypeReference(){for(var _len187=arguments.length,args=new Array(_len187),_key187=0;_key187<_len187;_key187++){args[_key187]=arguments[_key187];}return(0,_builder.default).apply(void 0,["TSTypeReference"].concat(args));}function TSTypePredicate(){for(var _len188=arguments.length,args=new Array(_len188),_key188=0;_key188<_len188;_key188++){args[_key188]=arguments[_key188];}return(0,_builder.default).apply(void 0,["TSTypePredicate"].concat(args));}function TSTypeQuery(){for(var _len189=arguments.length,args=new Array(_len189),_key189=0;_key189<_len189;_key189++){args[_key189]=arguments[_key189];}return(0,_builder.default).apply(void 0,["TSTypeQuery"].concat(args));}function TSTypeLiteral(){for(var _len190=arguments.length,args=new Array(_len190),_key190=0;_key190<_len190;_key190++){args[_key190]=arguments[_key190];}return(0,_builder.default).apply(void 0,["TSTypeLiteral"].concat(args));}function TSArrayType(){for(var _len191=arguments.length,args=new Array(_len191),_key191=0;_key191<_len191;_key191++){args[_key191]=arguments[_key191];}return(0,_builder.default).apply(void 0,["TSArrayType"].concat(args));}function TSTupleType(){for(var _len192=arguments.length,args=new Array(_len192),_key192=0;_key192<_len192;_key192++){args[_key192]=arguments[_key192];}return(0,_builder.default).apply(void 0,["TSTupleType"].concat(args));}function TSOptionalType(){for(var _len193=arguments.length,args=new Array(_len193),_key193=0;_key193<_len193;_key193++){args[_key193]=arguments[_key193];}return(0,_builder.default).apply(void 0,["TSOptionalType"].concat(args));}function TSRestType(){for(var _len194=arguments.length,args=new Array(_len194),_key194=0;_key194<_len194;_key194++){args[_key194]=arguments[_key194];}return(0,_builder.default).apply(void 0,["TSRestType"].concat(args));}function TSUnionType(){for(var _len195=arguments.length,args=new Array(_len195),_key195=0;_key195<_len195;_key195++){args[_key195]=arguments[_key195];}return(0,_builder.default).apply(void 0,["TSUnionType"].concat(args));}function TSIntersectionType(){for(var _len196=arguments.length,args=new Array(_len196),_key196=0;_key196<_len196;_key196++){args[_key196]=arguments[_key196];}return(0,_builder.default).apply(void 0,["TSIntersectionType"].concat(args));}function TSConditionalType(){for(var _len197=arguments.length,args=new Array(_len197),_key197=0;_key197<_len197;_key197++){args[_key197]=arguments[_key197];}return(0,_builder.default).apply(void 0,["TSConditionalType"].concat(args));}function TSInferType(){for(var _len198=arguments.length,args=new Array(_len198),_key198=0;_key198<_len198;_key198++){args[_key198]=arguments[_key198];}return(0,_builder.default).apply(void 0,["TSInferType"].concat(args));}function TSParenthesizedType(){for(var _len199=arguments.length,args=new Array(_len199),_key199=0;_key199<_len199;_key199++){args[_key199]=arguments[_key199];}return(0,_builder.default).apply(void 0,["TSParenthesizedType"].concat(args));}function TSTypeOperator(){for(var _len200=arguments.length,args=new Array(_len200),_key200=0;_key200<_len200;_key200++){args[_key200]=arguments[_key200];}return(0,_builder.default).apply(void 0,["TSTypeOperator"].concat(args));}function TSIndexedAccessType(){for(var _len201=arguments.length,args=new Array(_len201),_key201=0;_key201<_len201;_key201++){args[_key201]=arguments[_key201];}return(0,_builder.default).apply(void 0,["TSIndexedAccessType"].concat(args));}function TSMappedType(){for(var _len202=arguments.length,args=new Array(_len202),_key202=0;_key202<_len202;_key202++){args[_key202]=arguments[_key202];}return(0,_builder.default).apply(void 0,["TSMappedType"].concat(args));}function TSLiteralType(){for(var _len203=arguments.length,args=new Array(_len203),_key203=0;_key203<_len203;_key203++){args[_key203]=arguments[_key203];}return(0,_builder.default).apply(void 0,["TSLiteralType"].concat(args));}function TSExpressionWithTypeArguments(){for(var _len204=arguments.length,args=new Array(_len204),_key204=0;_key204<_len204;_key204++){args[_key204]=arguments[_key204];}return(0,_builder.default).apply(void 0,["TSExpressionWithTypeArguments"].concat(args));}function TSInterfaceDeclaration(){for(var _len205=arguments.length,args=new Array(_len205),_key205=0;_key205<_len205;_key205++){args[_key205]=arguments[_key205];}return(0,_builder.default).apply(void 0,["TSInterfaceDeclaration"].concat(args));}function TSInterfaceBody(){for(var _len206=arguments.length,args=new Array(_len206),_key206=0;_key206<_len206;_key206++){args[_key206]=arguments[_key206];}return(0,_builder.default).apply(void 0,["TSInterfaceBody"].concat(args));}function TSTypeAliasDeclaration(){for(var _len207=arguments.length,args=new Array(_len207),_key207=0;_key207<_len207;_key207++){args[_key207]=arguments[_key207];}return(0,_builder.default).apply(void 0,["TSTypeAliasDeclaration"].concat(args));}function TSAsExpression(){for(var _len208=arguments.length,args=new Array(_len208),_key208=0;_key208<_len208;_key208++){args[_key208]=arguments[_key208];}return(0,_builder.default).apply(void 0,["TSAsExpression"].concat(args));}function TSTypeAssertion(){for(var _len209=arguments.length,args=new Array(_len209),_key209=0;_key209<_len209;_key209++){args[_key209]=arguments[_key209];}return(0,_builder.default).apply(void 0,["TSTypeAssertion"].concat(args));}function TSEnumDeclaration(){for(var _len210=arguments.length,args=new Array(_len210),_key210=0;_key210<_len210;_key210++){args[_key210]=arguments[_key210];}return(0,_builder.default).apply(void 0,["TSEnumDeclaration"].concat(args));}function TSEnumMember(){for(var _len211=arguments.length,args=new Array(_len211),_key211=0;_key211<_len211;_key211++){args[_key211]=arguments[_key211];}return(0,_builder.default).apply(void 0,["TSEnumMember"].concat(args));}function TSModuleDeclaration(){for(var _len212=arguments.length,args=new Array(_len212),_key212=0;_key212<_len212;_key212++){args[_key212]=arguments[_key212];}return(0,_builder.default).apply(void 0,["TSModuleDeclaration"].concat(args));}function TSModuleBlock(){for(var _len213=arguments.length,args=new Array(_len213),_key213=0;_key213<_len213;_key213++){args[_key213]=arguments[_key213];}return(0,_builder.default).apply(void 0,["TSModuleBlock"].concat(args));}function TSImportType(){for(var _len214=arguments.length,args=new Array(_len214),_key214=0;_key214<_len214;_key214++){args[_key214]=arguments[_key214];}return(0,_builder.default).apply(void 0,["TSImportType"].concat(args));}function TSImportEqualsDeclaration(){for(var _len215=arguments.length,args=new Array(_len215),_key215=0;_key215<_len215;_key215++){args[_key215]=arguments[_key215];}return(0,_builder.default).apply(void 0,["TSImportEqualsDeclaration"].concat(args));}function TSExternalModuleReference(){for(var _len216=arguments.length,args=new Array(_len216),_key216=0;_key216<_len216;_key216++){args[_key216]=arguments[_key216];}return(0,_builder.default).apply(void 0,["TSExternalModuleReference"].concat(args));}function TSNonNullExpression(){for(var _len217=arguments.length,args=new Array(_len217),_key217=0;_key217<_len217;_key217++){args[_key217]=arguments[_key217];}return(0,_builder.default).apply(void 0,["TSNonNullExpression"].concat(args));}function TSExportAssignment(){for(var _len218=arguments.length,args=new Array(_len218),_key218=0;_key218<_len218;_key218++){args[_key218]=arguments[_key218];}return(0,_builder.default).apply(void 0,["TSExportAssignment"].concat(args));}function TSNamespaceExportDeclaration(){for(var _len219=arguments.length,args=new Array(_len219),_key219=0;_key219<_len219;_key219++){args[_key219]=arguments[_key219];}return(0,_builder.default).apply(void 0,["TSNamespaceExportDeclaration"].concat(args));}function TSTypeAnnotation(){for(var _len220=arguments.length,args=new Array(_len220),_key220=0;_key220<_len220;_key220++){args[_key220]=arguments[_key220];}return(0,_builder.default).apply(void 0,["TSTypeAnnotation"].concat(args));}function TSTypeParameterInstantiation(){for(var _len221=arguments.length,args=new Array(_len221),_key221=0;_key221<_len221;_key221++){args[_key221]=arguments[_key221];}return(0,_builder.default).apply(void 0,["TSTypeParameterInstantiation"].concat(args));}function TSTypeParameterDeclaration(){for(var _len222=arguments.length,args=new Array(_len222),_key222=0;_key222<_len222;_key222++){args[_key222]=arguments[_key222];}return(0,_builder.default).apply(void 0,["TSTypeParameterDeclaration"].concat(args));}function TSTypeParameter(){for(var _len223=arguments.length,args=new Array(_len223),_key223=0;_key223<_len223;_key223++){args[_key223]=arguments[_key223];}return(0,_builder.default).apply(void 0,["TSTypeParameter"].concat(args));}function NumberLiteral(){console.trace("The node type NumberLiteral has been renamed to NumericLiteral");for(var _len224=arguments.length,args=new Array(_len224),_key224=0;_key224<_len224;_key224++){args[_key224]=arguments[_key224];}return NumberLiteral.apply(void 0,["NumberLiteral"].concat(args));}function RegexLiteral(){console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");for(var _len225=arguments.length,args=new Array(_len225),_key225=0;_key225<_len225;_key225++){args[_key225]=arguments[_key225];}return RegexLiteral.apply(void 0,["RegexLiteral"].concat(args));}function RestProperty(){console.trace("The node type RestProperty has been renamed to RestElement");for(var _len226=arguments.length,args=new Array(_len226),_key226=0;_key226<_len226;_key226++){args[_key226]=arguments[_key226];}return RestProperty.apply(void 0,["RestProperty"].concat(args));}function SpreadProperty(){console.trace("The node type SpreadProperty has been renamed to SpreadElement");for(var _len227=arguments.length,args=new Array(_len227),_key227=0;_key227<_len227;_key227++){args[_key227]=arguments[_key227];}return SpreadProperty.apply(void 0,["SpreadProperty"].concat(args));}

/***/ }),
/* 344 */,
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var freeGlobal=__webpack_require__(396);/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;

/***/ }),
/* 346 */,
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.validate=validate;exports.typeIs=typeIs;exports.validateType=validateType;exports.validateOptional=validateOptional;exports.validateOptionalType=validateOptionalType;exports.arrayOf=arrayOf;exports.arrayOfType=arrayOfType;exports.validateArrayOfType=validateArrayOfType;exports.assertEach=assertEach;exports.assertOneOf=assertOneOf;exports.assertNodeType=assertNodeType;exports.assertNodeOrValueType=assertNodeOrValueType;exports.assertValueType=assertValueType;exports.chain=chain;exports.default=defineType;exports.DEPRECATED_KEYS=exports.BUILDER_KEYS=exports.NODE_FIELDS=exports.FLIPPED_ALIAS_KEYS=exports.ALIAS_KEYS=exports.VISITOR_KEYS=void 0;var _is=_interopRequireDefault(__webpack_require__(379));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var VISITOR_KEYS={};exports.VISITOR_KEYS=VISITOR_KEYS;var ALIAS_KEYS={};exports.ALIAS_KEYS=ALIAS_KEYS;var FLIPPED_ALIAS_KEYS={};exports.FLIPPED_ALIAS_KEYS=FLIPPED_ALIAS_KEYS;var NODE_FIELDS={};exports.NODE_FIELDS=NODE_FIELDS;var BUILDER_KEYS={};exports.BUILDER_KEYS=BUILDER_KEYS;var DEPRECATED_KEYS={};exports.DEPRECATED_KEYS=DEPRECATED_KEYS;function getType(val){if(Array.isArray(val)){return"array";}else if(val===null){return"null";}else if(val===undefined){return"undefined";}else{return _typeof(val);}}function validate(validate){return{validate:validate};}function typeIs(typeName){return typeof typeName==="string"?assertNodeType(typeName):assertNodeType.apply(void 0,_toConsumableArray(typeName));}function validateType(typeName){return validate(typeIs(typeName));}function validateOptional(validate){return{validate:validate,optional:true};}function validateOptionalType(typeName){return{validate:typeIs(typeName),optional:true};}function arrayOf(elementType){return chain(assertValueType("array"),assertEach(elementType));}function arrayOfType(typeName){return arrayOf(typeIs(typeName));}function validateArrayOfType(typeName){return validate(arrayOfType(typeName));}function assertEach(callback){function validator(node,key,val){if(!Array.isArray(val))return;for(var i=0;i<val.length;i++){callback(node,"".concat(key,"[").concat(i,"]"),val[i]);}}validator.each=callback;return validator;}function assertOneOf(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++){values[_key]=arguments[_key];}function validate(node,key,val){if(values.indexOf(val)<0){throw new TypeError("Property ".concat(key," expected value to be one of ").concat(JSON.stringify(values)," but got ").concat(JSON.stringify(val)));}}validate.oneOf=values;return validate;}function assertNodeType(){for(var _len2=arguments.length,types=new Array(_len2),_key2=0;_key2<_len2;_key2++){types[_key2]=arguments[_key2];}function validate(node,key,val){var valid=false;for(var _i=0,_types=types;_i<_types.length;_i++){var type=_types[_i];if((0,_is.default)(type,val)){valid=true;break;}}if(!valid){throw new TypeError("Property ".concat(key," of ").concat(node.type," expected node to be of a type ").concat(JSON.stringify(types)," ")+"but instead got ".concat(JSON.stringify(val&&val.type)));}}validate.oneOfNodeTypes=types;return validate;}function assertNodeOrValueType(){for(var _len3=arguments.length,types=new Array(_len3),_key3=0;_key3<_len3;_key3++){types[_key3]=arguments[_key3];}function validate(node,key,val){var valid=false;for(var _i2=0,_types2=types;_i2<_types2.length;_i2++){var type=_types2[_i2];if(getType(val)===type||(0,_is.default)(type,val)){valid=true;break;}}if(!valid){throw new TypeError("Property ".concat(key," of ").concat(node.type," expected node to be of a type ").concat(JSON.stringify(types)," ")+"but instead got ".concat(JSON.stringify(val&&val.type)));}}validate.oneOfNodeOrValueTypes=types;return validate;}function assertValueType(type){function validate(node,key,val){var valid=getType(val)===type;if(!valid){throw new TypeError("Property ".concat(key," expected type of ").concat(type," but got ").concat(getType(val)));}}validate.type=type;return validate;}function chain(){for(var _len4=arguments.length,fns=new Array(_len4),_key4=0;_key4<_len4;_key4++){fns[_key4]=arguments[_key4];}function validate(){for(var _i3=0,_fns=fns;_i3<_fns.length;_i3++){var fn=_fns[_i3];fn.apply(void 0,arguments);}}validate.chainOf=fns;return validate;}function defineType(type){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var inherits=opts.inherits&&store[opts.inherits]||{};var fields=opts.fields||inherits.fields||{};var visitor=opts.visitor||inherits.visitor||[];var aliases=opts.aliases||inherits.aliases||[];var builder=opts.builder||inherits.builder||opts.visitor||[];if(opts.deprecatedAlias){DEPRECATED_KEYS[opts.deprecatedAlias]=type;}var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=visitor.concat(builder)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;fields[key]=fields[key]||{};}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}for(var _i4=0,_Object$keys=Object.keys(fields);_i4<_Object$keys.length;_i4++){var _key5=_Object$keys[_i4];var field=fields[_key5];if(builder.indexOf(_key5)===-1){field.optional=true;}if(field.default===undefined){field.default=null;}else if(!field.validate){field.validate=assertValueType(getType(field.default));}}VISITOR_KEYS[type]=opts.visitor=visitor;BUILDER_KEYS[type]=opts.builder=builder;NODE_FIELDS[type]=opts.fields=fields;ALIAS_KEYS[type]=opts.aliases=aliases;aliases.forEach(function(alias){FLIPPED_ALIAS_KEYS[alias]=FLIPPED_ALIAS_KEYS[alias]||[];FLIPPED_ALIAS_KEYS[alias].push(type);});store[type]=opts;}var store={};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative=__webpack_require__(487),getValue=__webpack_require__(492);/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;

/***/ }),
/* 349 */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}module.exports=isObjectLike;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}Object.defineProperty(exports,"__esModule",{value:true});exports.NOT_LOCAL_BINDING=exports.BLOCK_SCOPED_SYMBOL=exports.INHERIT_KEYS=exports.UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=exports.BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=exports.UPDATE_OPERATORS=exports.LOGICAL_OPERATORS=exports.COMMENT_KEYS=exports.FOR_INIT_KEYS=exports.FLATTENABLE_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=void 0;var STATEMENT_OR_BLOCK_KEYS=["consequent","body","alternate"];exports.STATEMENT_OR_BLOCK_KEYS=STATEMENT_OR_BLOCK_KEYS;var FLATTENABLE_KEYS=["body","expressions"];exports.FLATTENABLE_KEYS=FLATTENABLE_KEYS;var FOR_INIT_KEYS=["left","init"];exports.FOR_INIT_KEYS=FOR_INIT_KEYS;var COMMENT_KEYS=["leadingComments","trailingComments","innerComments"];exports.COMMENT_KEYS=COMMENT_KEYS;var LOGICAL_OPERATORS=["||","&&","??"];exports.LOGICAL_OPERATORS=LOGICAL_OPERATORS;var UPDATE_OPERATORS=["++","--"];exports.UPDATE_OPERATORS=UPDATE_OPERATORS;var BOOLEAN_NUMBER_BINARY_OPERATORS=[">","<",">=","<="];exports.BOOLEAN_NUMBER_BINARY_OPERATORS=BOOLEAN_NUMBER_BINARY_OPERATORS;var EQUALITY_BINARY_OPERATORS=["==","===","!=","!=="];exports.EQUALITY_BINARY_OPERATORS=EQUALITY_BINARY_OPERATORS;var COMPARISON_BINARY_OPERATORS=[].concat(EQUALITY_BINARY_OPERATORS,["in","instanceof"]);exports.COMPARISON_BINARY_OPERATORS=COMPARISON_BINARY_OPERATORS;var BOOLEAN_BINARY_OPERATORS=[].concat(_toConsumableArray(COMPARISON_BINARY_OPERATORS),BOOLEAN_NUMBER_BINARY_OPERATORS);exports.BOOLEAN_BINARY_OPERATORS=BOOLEAN_BINARY_OPERATORS;var NUMBER_BINARY_OPERATORS=["-","/","%","*","**","&","|",">>",">>>","<<","^"];exports.NUMBER_BINARY_OPERATORS=NUMBER_BINARY_OPERATORS;var BINARY_OPERATORS=["+"].concat(NUMBER_BINARY_OPERATORS,_toConsumableArray(BOOLEAN_BINARY_OPERATORS));exports.BINARY_OPERATORS=BINARY_OPERATORS;var BOOLEAN_UNARY_OPERATORS=["delete","!"];exports.BOOLEAN_UNARY_OPERATORS=BOOLEAN_UNARY_OPERATORS;var NUMBER_UNARY_OPERATORS=["+","-","~"];exports.NUMBER_UNARY_OPERATORS=NUMBER_UNARY_OPERATORS;var STRING_UNARY_OPERATORS=["typeof"];exports.STRING_UNARY_OPERATORS=STRING_UNARY_OPERATORS;var UNARY_OPERATORS=["void","throw"].concat(BOOLEAN_UNARY_OPERATORS,NUMBER_UNARY_OPERATORS,STRING_UNARY_OPERATORS);exports.UNARY_OPERATORS=UNARY_OPERATORS;var INHERIT_KEYS={optional:["typeAnnotation","typeParameters","returnType"],force:["start","loc","end"]};exports.INHERIT_KEYS=INHERIT_KEYS;var BLOCK_SCOPED_SYMBOL=Symbol.for("var used to be block scoped");exports.BLOCK_SCOPED_SYMBOL=BLOCK_SCOPED_SYMBOL;var NOT_LOCAL_BINDING=Symbol.for("should not be considered a local binding");exports.NOT_LOCAL_BINDING=NOT_LOCAL_BINDING;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(370),getRawTag=__webpack_require__(488),objectToString=__webpack_require__(489);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;

/***/ }),
/* 352 */,
/* 353 */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}module.exports=isObject;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isValidIdentifier;function _esutils(){var data=_interopRequireDefault(__webpack_require__(544));_esutils=function _esutils(){return data;};return data;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isValidIdentifier(name){if(typeof name!=="string"||_esutils().default.keyword.isReservedWordES6(name,true)){return false;}else if(name==="await"){return false;}else{return _esutils().default.keyword.isIdentifierNameES6(name);}}

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=cloneNode;var _definitions=__webpack_require__(341);var has=Function.call.bind(Object.prototype.hasOwnProperty);function cloneIfNode(obj,deep){if(obj&&typeof obj.type==="string"&&obj.type!=="CommentLine"&&obj.type!=="CommentBlock"){return cloneNode(obj,deep);}return obj;}function cloneIfNodeOrArray(obj,deep){if(Array.isArray(obj)){return obj.map(function(node){return cloneIfNode(node,deep);});}return cloneIfNode(obj,deep);}function cloneNode(node){var deep=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!node)return node;var type=node.type;var newNode={type:type};if(type==="Identifier"){newNode.name=node.name;if(has(node,"optional")&&typeof node.optional==="boolean"){newNode.optional=node.optional;}if(has(node,"typeAnnotation")){newNode.typeAnnotation=deep?cloneIfNodeOrArray(node.typeAnnotation,true):node.typeAnnotation;}}else if(!has(_definitions.NODE_FIELDS,type)){throw new Error("Unknown node type: \"".concat(type,"\""));}else{for(var _i=0,_Object$keys=Object.keys(_definitions.NODE_FIELDS[type]);_i<_Object$keys.length;_i++){var field=_Object$keys[_i];if(has(node,field)){newNode[field]=deep?cloneIfNodeOrArray(node[field],true):node[field];}}}if(has(node,"loc")){newNode.loc=node.loc;}if(has(node,"leadingComments")){newNode.leadingComments=node.leadingComments;}if(has(node,"innerComments")){newNode.innerComments=node.innerComments;}if(has(node,"trailingComments")){newNode.trailingComments=node.trailingComments;}if(has(node,"extra")){newNode.extra=Object.assign({},node.extra);}return newNode;}

/***/ }),
/* 356 */,
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear=__webpack_require__(477),listCacheDelete=__webpack_require__(478),listCacheGet=__webpack_require__(479),listCacheHas=__webpack_require__(480),listCacheSet=__webpack_require__(481);/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var eq=__webpack_require__(394);/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable=__webpack_require__(501);/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue=__webpack_require__(399),baseAssignValue=__webpack_require__(400);/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}module.exports=copyObject;

/***/ }),
/* 362 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var freeGlobal=__webpack_require__(396);/** Detect free variable `exports`. */var freeExports=( false?undefined:_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?undefined:_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(132)(module)))

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=getBindingIdentifiers;var _generated=__webpack_require__(340);function getBindingIdentifiers(node,duplicates,outerOnly){var search=[].concat(node);var ids=Object.create(null);while(search.length){var id=search.shift();if(!id)continue;var keys=getBindingIdentifiers.keys[id.type];if((0,_generated.isIdentifier)(id)){if(duplicates){var _ids=ids[id.name]=ids[id.name]||[];_ids.push(id);}else{ids[id.name]=id;}continue;}if((0,_generated.isExportDeclaration)(id)){if((0,_generated.isDeclaration)(id.declaration)){search.push(id.declaration);}continue;}if(outerOnly){if((0,_generated.isFunctionDeclaration)(id)){search.push(id.id);continue;}if((0,_generated.isFunctionExpression)(id)){continue;}}if(keys){for(var i=0;i<keys.length;i++){var key=keys[i];if(id[key]){search=search.concat(id[key]);}}}}return ids;}getBindingIdentifiers.keys={DeclareClass:["id"],DeclareFunction:["id"],DeclareModule:["id"],DeclareVariable:["id"],DeclareInterface:["id"],DeclareTypeAlias:["id"],DeclareOpaqueType:["id"],InterfaceDeclaration:["id"],TypeAlias:["id"],OpaqueType:["id"],CatchClause:["param"],LabeledStatement:["label"],UnaryExpression:["argument"],AssignmentExpression:["left"],ImportSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportDefaultSpecifier:["local"],ImportDeclaration:["specifiers"],ExportSpecifier:["exported"],ExportNamespaceSpecifier:["exported"],ExportDefaultSpecifier:["exported"],FunctionDeclaration:["id","params"],FunctionExpression:["id","params"],ArrowFunctionExpression:["params"],ObjectMethod:["params"],ClassMethod:["params"],ForInStatement:["left"],ForOfStatement:["left"],ClassDeclaration:["id"],ClassExpression:["id"],RestElement:["argument"],UpdateExpression:["argument"],ObjectProperty:["value"],AssignmentPattern:["left"],ArrayPattern:["elements"],ObjectPattern:["properties"],VariableDeclaration:["declarations"],VariableDeclarator:["id"]};

/***/ }),
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=shallowEqual;function shallowEqual(actual,expected){var keys=Object.keys(expected);for(var _i=0,_keys=keys;_i<_keys.length;_i++){var key=_keys[_i];if(actual[key]!==expected[key]){return false;}}return true;}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348),root=__webpack_require__(345);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(345);/** Built-in value references. */var _Symbol=root.Symbol;module.exports=_Symbol;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys=__webpack_require__(401),baseKeys=__webpack_require__(515),isArrayLike=__webpack_require__(405);/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;

/***/ }),
/* 372 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;

/***/ }),
/* 373 */
/***/ (function(module, exports) {

/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter=__webpack_require__(523),stubArray=__webpack_require__(407);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var overArg=__webpack_require__(404);/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var DataView=__webpack_require__(527),Map=__webpack_require__(369),Promise=__webpack_require__(528),Set=__webpack_require__(411),WeakMap=__webpack_require__(529),baseGetTag=__webpack_require__(351),toSource=__webpack_require__(397);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array=__webpack_require__(532);/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}module.exports=cloneArrayBuffer;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}Object.defineProperty(exports,"__esModule",{value:true});exports.patternLikeCommon=exports.functionDeclarationCommon=exports.functionTypeAnnotationCommon=exports.functionCommon=void 0;var _isValidIdentifier=_interopRequireDefault(__webpack_require__(354));var _constants=__webpack_require__(350);var _utils=_interopRequireWildcard(__webpack_require__(347));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_utils.default)("ArrayExpression",{fields:{elements:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeOrValueType)("null","Expression","SpreadElement"))),default:[]}},visitor:["elements"],aliases:["Expression"]});(0,_utils.default)("AssignmentExpression",{fields:{operator:{validate:(0,_utils.assertValueType)("string")},left:{validate:(0,_utils.assertNodeType)("LVal")},right:{validate:(0,_utils.assertNodeType)("Expression")}},builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]});(0,_utils.default)("BinaryExpression",{builder:["operator","left","right"],fields:{operator:{validate:(0,_utils.assertOneOf).apply(void 0,_toConsumableArray(_constants.BINARY_OPERATORS))},left:{validate:(0,_utils.assertNodeType)("Expression")},right:{validate:(0,_utils.assertNodeType)("Expression")}},visitor:["left","right"],aliases:["Binary","Expression"]});(0,_utils.default)("InterpreterDirective",{builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("string")}}});(0,_utils.default)("Directive",{visitor:["value"],fields:{value:{validate:(0,_utils.assertNodeType)("DirectiveLiteral")}}});(0,_utils.default)("DirectiveLiteral",{builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("string")}}});(0,_utils.default)("BlockStatement",{builder:["body","directives"],visitor:["directives","body"],fields:{directives:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Directive"))),default:[]},body:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","Statement"]});(0,_utils.default)("BreakStatement",{visitor:["label"],fields:{label:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true}},aliases:["Statement","Terminatorless","CompletionStatement"]});(0,_utils.default)("CallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments"],aliases:["Expression"],fields:{callee:{validate:(0,_utils.assertNodeType)("Expression")},arguments:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder")))},optional:{validate:(0,_utils.assertOneOf)(true,false),optional:true},typeArguments:{validate:(0,_utils.assertNodeType)("TypeParameterInstantiation"),optional:true},typeParameters:{validate:(0,_utils.assertNodeType)("TSTypeParameterInstantiation"),optional:true}}});(0,_utils.default)("CatchClause",{visitor:["param","body"],fields:{param:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true},body:{validate:(0,_utils.assertNodeType)("BlockStatement")}},aliases:["Scopable","BlockParent"]});(0,_utils.default)("ConditionalExpression",{visitor:["test","consequent","alternate"],fields:{test:{validate:(0,_utils.assertNodeType)("Expression")},consequent:{validate:(0,_utils.assertNodeType)("Expression")},alternate:{validate:(0,_utils.assertNodeType)("Expression")}},aliases:["Expression","Conditional"]});(0,_utils.default)("ContinueStatement",{visitor:["label"],fields:{label:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true}},aliases:["Statement","Terminatorless","CompletionStatement"]});(0,_utils.default)("DebuggerStatement",{aliases:["Statement"]});(0,_utils.default)("DoWhileStatement",{visitor:["test","body"],fields:{test:{validate:(0,_utils.assertNodeType)("Expression")},body:{validate:(0,_utils.assertNodeType)("Statement")}},aliases:["Statement","BlockParent","Loop","While","Scopable"]});(0,_utils.default)("EmptyStatement",{aliases:["Statement"]});(0,_utils.default)("ExpressionStatement",{visitor:["expression"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression")}},aliases:["Statement","ExpressionWrapper"]});(0,_utils.default)("File",{builder:["program","comments","tokens"],visitor:["program"],fields:{program:{validate:(0,_utils.assertNodeType)("Program")}}});(0,_utils.default)("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_utils.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_utils.assertNodeType)("Expression")},body:{validate:(0,_utils.assertNodeType)("Statement")}}});(0,_utils.default)("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"],fields:{init:{validate:(0,_utils.assertNodeType)("VariableDeclaration","Expression"),optional:true},test:{validate:(0,_utils.assertNodeType)("Expression"),optional:true},update:{validate:(0,_utils.assertNodeType)("Expression"),optional:true},body:{validate:(0,_utils.assertNodeType)("Statement")}}});var functionCommon={params:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Identifier","Pattern","RestElement","TSParameterProperty")))},generator:{default:false,validate:(0,_utils.assertValueType)("boolean")},async:{validate:(0,_utils.assertValueType)("boolean"),default:false}};exports.functionCommon=functionCommon;var functionTypeAnnotationCommon={returnType:{validate:(0,_utils.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:true},typeParameters:{validate:(0,_utils.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:true}};exports.functionTypeAnnotationCommon=functionTypeAnnotationCommon;var functionDeclarationCommon=Object.assign({},functionCommon,{declare:{validate:(0,_utils.assertValueType)("boolean"),optional:true},id:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true}});exports.functionDeclarationCommon=functionDeclarationCommon;(0,_utils.default)("FunctionDeclaration",{builder:["id","params","body","generator","async"],visitor:["id","params","body","returnType","typeParameters"],fields:Object.assign({},functionDeclarationCommon,functionTypeAnnotationCommon,{body:{validate:(0,_utils.assertNodeType)("BlockStatement")}}),aliases:["Scopable","Function","BlockParent","FunctionParent","Statement","Pureish","Declaration"]});(0,_utils.default)("FunctionExpression",{inherits:"FunctionDeclaration",aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},functionCommon,functionTypeAnnotationCommon,{id:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true},body:{validate:(0,_utils.assertNodeType)("BlockStatement")}})});var patternLikeCommon={typeAnnotation:{validate:(0,_utils.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:true},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator")))}};exports.patternLikeCommon=patternLikeCommon;(0,_utils.default)("Identifier",{builder:["name"],visitor:["typeAnnotation","decorators"],aliases:["Expression","PatternLike","LVal","TSEntityName"],fields:Object.assign({},patternLikeCommon,{name:{validate:(0,_utils.chain)(function(node,key,val){if(!(0,_isValidIdentifier.default)(val)){}},(0,_utils.assertValueType)("string"))},optional:{validate:(0,_utils.assertValueType)("boolean"),optional:true}})});(0,_utils.default)("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement","Conditional"],fields:{test:{validate:(0,_utils.assertNodeType)("Expression")},consequent:{validate:(0,_utils.assertNodeType)("Statement")},alternate:{optional:true,validate:(0,_utils.assertNodeType)("Statement")}}});(0,_utils.default)("LabeledStatement",{visitor:["label","body"],aliases:["Statement"],fields:{label:{validate:(0,_utils.assertNodeType)("Identifier")},body:{validate:(0,_utils.assertNodeType)("Statement")}}});(0,_utils.default)("StringLiteral",{builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]});(0,_utils.default)("NumericLiteral",{builder:["value"],deprecatedAlias:"NumberLiteral",fields:{value:{validate:(0,_utils.assertValueType)("number")}},aliases:["Expression","Pureish","Literal","Immutable"]});(0,_utils.default)("NullLiteral",{aliases:["Expression","Pureish","Literal","Immutable"]});(0,_utils.default)("BooleanLiteral",{builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("boolean")}},aliases:["Expression","Pureish","Literal","Immutable"]});(0,_utils.default)("RegExpLiteral",{builder:["pattern","flags"],deprecatedAlias:"RegexLiteral",aliases:["Expression","Literal"],fields:{pattern:{validate:(0,_utils.assertValueType)("string")},flags:{validate:(0,_utils.assertValueType)("string"),default:""}}});(0,_utils.default)("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"],fields:{operator:{validate:(0,_utils.assertOneOf).apply(void 0,_toConsumableArray(_constants.LOGICAL_OPERATORS))},left:{validate:(0,_utils.assertNodeType)("Expression")},right:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("MemberExpression",{builder:["object","property","computed","optional"],visitor:["object","property"],aliases:["Expression","LVal"],fields:{object:{validate:(0,_utils.assertNodeType)("Expression")},property:{validate:function(){var normal=(0,_utils.assertNodeType)("Identifier","PrivateName");var computed=(0,_utils.assertNodeType)("Expression");return function(node,key,val){var validator=node.computed?computed:normal;validator(node,key,val);};}()},computed:{default:false},optional:{validate:(0,_utils.assertOneOf)(true,false),optional:true}}});(0,_utils.default)("NewExpression",{inherits:"CallExpression"});(0,_utils.default)("Program",{visitor:["directives","body"],builder:["body","directives","sourceType","interpreter"],fields:{sourceFile:{validate:(0,_utils.assertValueType)("string")},sourceType:{validate:(0,_utils.assertOneOf)("script","module"),default:"script"},interpreter:{validate:(0,_utils.assertNodeType)("InterpreterDirective"),default:null,optional:true},directives:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Directive"))),default:[]},body:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block"]});(0,_utils.default)("ObjectExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("ObjectMethod","ObjectProperty","SpreadElement")))}}});(0,_utils.default)("ObjectMethod",{builder:["kind","key","params","body","computed"],fields:Object.assign({},functionCommon,functionTypeAnnotationCommon,{kind:{validate:(0,_utils.chain)((0,_utils.assertValueType)("string"),(0,_utils.assertOneOf)("method","get","set")),default:"method"},computed:{validate:(0,_utils.assertValueType)("boolean"),default:false},key:{validate:function(){var normal=(0,_utils.assertNodeType)("Identifier","StringLiteral","NumericLiteral");var computed=(0,_utils.assertNodeType)("Expression");return function(node,key,val){var validator=node.computed?computed:normal;validator(node,key,val);};}()},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator")))},body:{validate:(0,_utils.assertNodeType)("BlockStatement")}}),visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["UserWhitespacable","Function","Scopable","BlockParent","FunctionParent","Method","ObjectMember"]});(0,_utils.default)("ObjectProperty",{builder:["key","value","computed","shorthand","decorators"],fields:{computed:{validate:(0,_utils.assertValueType)("boolean"),default:false},key:{validate:function(){var normal=(0,_utils.assertNodeType)("Identifier","StringLiteral","NumericLiteral");var computed=(0,_utils.assertNodeType)("Expression");return function(node,key,val){var validator=node.computed?computed:normal;validator(node,key,val);};}()},value:{validate:(0,_utils.assertNodeType)("Expression","PatternLike")},shorthand:{validate:(0,_utils.assertValueType)("boolean"),default:false},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator"))),optional:true}},visitor:["key","value","decorators"],aliases:["UserWhitespacable","Property","ObjectMember"]});(0,_utils.default)("RestElement",{visitor:["argument","typeAnnotation"],builder:["argument"],aliases:["LVal","PatternLike"],deprecatedAlias:"RestProperty",fields:Object.assign({},patternLikeCommon,{argument:{validate:(0,_utils.assertNodeType)("LVal")}})});(0,_utils.default)("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_utils.assertNodeType)("Expression"),optional:true}}});(0,_utils.default)("SequenceExpression",{visitor:["expressions"],fields:{expressions:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Expression")))}},aliases:["Expression"]});(0,_utils.default)("ParenthesizedExpression",{visitor:["expression"],aliases:["Expression","ExpressionWrapper"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("SwitchCase",{visitor:["test","consequent"],fields:{test:{validate:(0,_utils.assertNodeType)("Expression"),optional:true},consequent:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Statement")))}}});(0,_utils.default)("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"],fields:{discriminant:{validate:(0,_utils.assertNodeType)("Expression")},cases:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("SwitchCase")))}}});(0,_utils.default)("ThisExpression",{aliases:["Expression"]});(0,_utils.default)("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("TryStatement",{visitor:["block","handler","finalizer"],aliases:["Statement"],fields:{block:{validate:(0,_utils.assertNodeType)("BlockStatement")},handler:{optional:true,validate:(0,_utils.assertNodeType)("CatchClause")},finalizer:{optional:true,validate:(0,_utils.assertNodeType)("BlockStatement")}}});(0,_utils.default)("UnaryExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:true},argument:{validate:(0,_utils.assertNodeType)("Expression")},operator:{validate:(0,_utils.assertOneOf).apply(void 0,_toConsumableArray(_constants.UNARY_OPERATORS))}},visitor:["argument"],aliases:["UnaryLike","Expression"]});(0,_utils.default)("UpdateExpression",{builder:["operator","argument","prefix"],fields:{prefix:{default:false},argument:{validate:(0,_utils.assertNodeType)("Expression")},operator:{validate:(0,_utils.assertOneOf).apply(void 0,_toConsumableArray(_constants.UPDATE_OPERATORS))}},visitor:["argument"],aliases:["Expression"]});(0,_utils.default)("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"],fields:{declare:{validate:(0,_utils.assertValueType)("boolean"),optional:true},kind:{validate:(0,_utils.chain)((0,_utils.assertValueType)("string"),(0,_utils.assertOneOf)("var","let","const"))},declarations:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("VariableDeclarator")))}}});(0,_utils.default)("VariableDeclarator",{visitor:["id","init"],fields:{id:{validate:(0,_utils.assertNodeType)("LVal")},definite:{optional:true,validate:(0,_utils.assertValueType)("boolean")},init:{optional:true,validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"],fields:{test:{validate:(0,_utils.assertNodeType)("Expression")},body:{validate:(0,_utils.assertNodeType)("BlockStatement","Statement")}}});(0,_utils.default)("WithStatement",{visitor:["object","body"],aliases:["Statement"],fields:{object:{validate:(0,_utils.assertNodeType)("Expression")},body:{validate:(0,_utils.assertNodeType)("BlockStatement","Statement")}}});

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=is;var _shallowEqual=_interopRequireDefault(__webpack_require__(368));var _isType=_interopRequireDefault(__webpack_require__(380));var _isPlaceholderType=_interopRequireDefault(__webpack_require__(413));var _definitions=__webpack_require__(341);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function is(type,node,opts){if(!node)return false;var matches=(0,_isType.default)(node.type,type);if(!matches){if(!opts&&node.type==="Placeholder"&&type in _definitions.FLIPPED_ALIAS_KEYS){return(0,_isPlaceholderType.default)(node.expectedNode,type);}return false;}if(typeof opts==="undefined"){return true;}else{return(0,_shallowEqual.default)(node,opts);}}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isType;var _definitions=__webpack_require__(341);function isType(nodeType,targetType){if(nodeType===targetType)return true;if(_definitions.ALIAS_KEYS[targetType])return false;var aliases=_definitions.FLIPPED_ALIAS_KEYS[targetType];if(aliases){if(aliases[0]===nodeType)return true;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=aliases[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var alias=_step.value;if(nodeType===alias)return true;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}return false;}

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.classMethodOrDeclareMethodCommon=exports.classMethodOrPropertyCommon=void 0;var _utils=_interopRequireWildcard(__webpack_require__(347));var _core=__webpack_require__(378);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}(0,_utils.default)("AssignmentPattern",{visitor:["left","right","decorators"],builder:["left","right"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},_core.patternLikeCommon,{left:{validate:(0,_utils.assertNodeType)("Identifier","ObjectPattern","ArrayPattern")},right:{validate:(0,_utils.assertNodeType)("Expression")},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator")))}})});(0,_utils.default)("ArrayPattern",{visitor:["elements","typeAnnotation"],builder:["elements"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},_core.patternLikeCommon,{elements:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("PatternLike")))},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator")))}})});(0,_utils.default)("ArrowFunctionExpression",{builder:["params","body","async"],visitor:["params","body","returnType","typeParameters"],aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:Object.assign({},_core.functionCommon,_core.functionTypeAnnotationCommon,{expression:{validate:(0,_utils.assertValueType)("boolean")},body:{validate:(0,_utils.assertNodeType)("BlockStatement","Expression")}})});(0,_utils.default)("ClassBody",{visitor:["body"],fields:{body:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("ClassMethod","ClassPrivateMethod","ClassProperty","ClassPrivateProperty","TSDeclareMethod","TSIndexSignature")))}}});var classCommon={typeParameters:{validate:(0,_utils.assertNodeType)("TypeParameterDeclaration","TSTypeParameterDeclaration","Noop"),optional:true},body:{validate:(0,_utils.assertNodeType)("ClassBody")},superClass:{optional:true,validate:(0,_utils.assertNodeType)("Expression")},superTypeParameters:{validate:(0,_utils.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:true},implements:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("TSExpressionWithTypeArguments","ClassImplements"))),optional:true}};(0,_utils.default)("ClassDeclaration",{builder:["id","superClass","body","decorators"],visitor:["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],aliases:["Scopable","Class","Statement","Declaration","Pureish"],fields:Object.assign({},classCommon,{declare:{validate:(0,_utils.assertValueType)("boolean"),optional:true},abstract:{validate:(0,_utils.assertValueType)("boolean"),optional:true},id:{validate:(0,_utils.assertNodeType)("Identifier"),optional:true},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator"))),optional:true}})});(0,_utils.default)("ClassExpression",{inherits:"ClassDeclaration",aliases:["Scopable","Class","Expression","Pureish"],fields:Object.assign({},classCommon,{id:{optional:true,validate:(0,_utils.assertNodeType)("Identifier")},body:{validate:(0,_utils.assertNodeType)("ClassBody")},superClass:{optional:true,validate:(0,_utils.assertNodeType)("Expression")},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator"))),optional:true}})});(0,_utils.default)("ExportAllDeclaration",{visitor:["source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{source:{validate:(0,_utils.assertNodeType)("StringLiteral")}}});(0,_utils.default)("ExportDefaultDeclaration",{visitor:["declaration"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_utils.assertNodeType)("FunctionDeclaration","TSDeclareFunction","ClassDeclaration","Expression")}}});(0,_utils.default)("ExportNamedDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_utils.assertNodeType)("Declaration"),optional:true},specifiers:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("ExportSpecifier","ExportDefaultSpecifier","ExportNamespaceSpecifier")))},source:{validate:(0,_utils.assertNodeType)("StringLiteral"),optional:true}}});(0,_utils.default)("ExportSpecifier",{visitor:["local","exported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_utils.assertNodeType)("Identifier")},exported:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("ForOfStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_utils.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_utils.assertNodeType)("Expression")},body:{validate:(0,_utils.assertNodeType)("Statement")},await:{default:false,validate:(0,_utils.assertValueType)("boolean")}}});(0,_utils.default)("ImportDeclaration",{visitor:["specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration"],fields:{specifiers:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier")))},source:{validate:(0,_utils.assertNodeType)("StringLiteral")},importKind:{validate:(0,_utils.assertOneOf)("type","typeof","value"),optional:true}}});(0,_utils.default)("ImportDefaultSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("ImportNamespaceSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("ImportSpecifier",{visitor:["local","imported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_utils.assertNodeType)("Identifier")},imported:{validate:(0,_utils.assertNodeType)("Identifier")},importKind:{validate:(0,_utils.assertOneOf)("type","typeof"),optional:true}}});(0,_utils.default)("MetaProperty",{visitor:["meta","property"],aliases:["Expression"],fields:{meta:{validate:(0,_utils.assertNodeType)("Identifier")},property:{validate:(0,_utils.assertNodeType)("Identifier")}}});var classMethodOrPropertyCommon={abstract:{validate:(0,_utils.assertValueType)("boolean"),optional:true},accessibility:{validate:(0,_utils.chain)((0,_utils.assertValueType)("string"),(0,_utils.assertOneOf)("public","private","protected")),optional:true},static:{validate:(0,_utils.assertValueType)("boolean"),optional:true},computed:{default:false,validate:(0,_utils.assertValueType)("boolean")},optional:{validate:(0,_utils.assertValueType)("boolean"),optional:true},key:{validate:(0,_utils.chain)(function(){var normal=(0,_utils.assertNodeType)("Identifier","StringLiteral","NumericLiteral");var computed=(0,_utils.assertNodeType)("Expression");return function(node,key,val){var validator=node.computed?computed:normal;validator(node,key,val);};}(),(0,_utils.assertNodeType)("Identifier","StringLiteral","NumericLiteral","Expression"))}};exports.classMethodOrPropertyCommon=classMethodOrPropertyCommon;var classMethodOrDeclareMethodCommon=Object.assign({},_core.functionCommon,classMethodOrPropertyCommon,{kind:{validate:(0,_utils.chain)((0,_utils.assertValueType)("string"),(0,_utils.assertOneOf)("get","set","method","constructor")),default:"method"},access:{validate:(0,_utils.chain)((0,_utils.assertValueType)("string"),(0,_utils.assertOneOf)("public","private","protected")),optional:true},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator"))),optional:true}});exports.classMethodOrDeclareMethodCommon=classMethodOrDeclareMethodCommon;(0,_utils.default)("ClassMethod",{aliases:["Function","Scopable","BlockParent","FunctionParent","Method"],builder:["kind","key","params","body","computed","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],fields:Object.assign({},classMethodOrDeclareMethodCommon,_core.functionTypeAnnotationCommon,{body:{validate:(0,_utils.assertNodeType)("BlockStatement")}})});(0,_utils.default)("ObjectPattern",{visitor:["properties","typeAnnotation","decorators"],builder:["properties"],aliases:["Pattern","PatternLike","LVal"],fields:Object.assign({},_core.patternLikeCommon,{properties:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("RestElement","ObjectProperty")))}})});(0,_utils.default)("SpreadElement",{visitor:["argument"],aliases:["UnaryLike"],deprecatedAlias:"SpreadProperty",fields:{argument:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("Super",{aliases:["Expression"]});(0,_utils.default)("TaggedTemplateExpression",{visitor:["tag","quasi"],aliases:["Expression"],fields:{tag:{validate:(0,_utils.assertNodeType)("Expression")},quasi:{validate:(0,_utils.assertNodeType)("TemplateLiteral")},typeParameters:{validate:(0,_utils.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:true}}});(0,_utils.default)("TemplateElement",{builder:["value","tail"],fields:{value:{},tail:{validate:(0,_utils.assertValueType)("boolean"),default:false}}});(0,_utils.default)("TemplateLiteral",{visitor:["quasis","expressions"],aliases:["Expression","Literal"],fields:{quasis:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("TemplateElement")))},expressions:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Expression")))}}});(0,_utils.default)("YieldExpression",{builder:["argument","delegate"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{delegate:{validate:(0,_utils.assertValueType)("boolean"),default:false},argument:{optional:true,validate:(0,_utils.assertNodeType)("Expression")}}});

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inherit;function _uniq(){var data=_interopRequireDefault(__webpack_require__(559));_uniq=function _uniq(){return data;};return data;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inherit(key,child,parent){if(child&&parent){child[key]=(0,_uniq().default)([].concat(child[key],parent[key]).filter(Boolean));}}

/***/ }),
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Point2=__webpack_require__(389);var _Point3=_interopRequireDefault(_Point2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(_typeof(call)==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+_typeof(superClass));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var LazyPoint=function(_Point){_inherits(LazyPoint,_Point);function LazyPoint(){_classCallCheck(this,LazyPoint);return _possibleConstructorReturn(this,(LazyPoint.__proto__||Object.getPrototypeOf(LazyPoint)).apply(this,arguments));}_createClass(LazyPoint,[{key:'update',/**
     * Update the x and y values
     *
     * @param {Point} point
     */value:function update(point){this.x=point.x;this.y=point.y;}/**
     * Move the point to another position using an angle and distance
     *
     * @param {number} angle The angle in radians
     * @param {number} distance How much the point should be moved
     */},{key:'moveByAngle',value:function moveByAngle(angle,distance){// Rotate the angle based on the browser coordinate system ([0,0] in the top left)
var angleRotated=angle+Math.PI/2;this.x=this.x+Math.sin(angleRotated)*distance,this.y=this.y-Math.cos(angleRotated)*distance;}/**
     * Check if this point is the same as another point
     *
     * @param {Point} point
     * @returns {boolean}
     */},{key:'equalsTo',value:function equalsTo(point){return this.x===point.x&&this.y===point.y;}/**
     * Get the difference for x and y axis to another point
     *
     * @param {Point} point
     * @returns {Point}
     */},{key:'getDifferenceTo',value:function getDifferenceTo(point){return new _Point3.default(this.x-point.x,this.y-point.y);}/**
     * Calculate distance to another point
     *
     * @param {Point} point
     * @returns {Point}
     */},{key:'getDistanceTo',value:function getDistanceTo(point){var diff=this.getDifferenceTo(point);return Math.sqrt(Math.pow(diff.x,2)+Math.pow(diff.y,2));}/**
     * Calculate the angle to another point
     *
     * @param {Point} point
     * @returns {Point}
     */},{key:'getAngleTo',value:function getAngleTo(point){var diff=this.getDifferenceTo(point);return Math.atan2(diff.y,diff.x);}/**
     * Return a simple object with x and y properties
     *
     * @returns {object}
     */},{key:'toObject',value:function toObject(){return{x:this.x,y:this.y};}}]);return LazyPoint;}(_Point3.default);exports.default=LazyPoint;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Point=/**
 *
 * @param {number} x
 * @param {number} y
 */function Point(x,y){_classCallCheck(this,Point);this.x=x;this.y=y;};exports.default=Point;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Point=function(){/**
   *
   * @param {number} x
   * @param {number} y
   */function Point(x,y){_classCallCheck(this,Point);this.x=x;this.y=y;}/**
   * Update the x and y values
   *
   * @param {Point} point
   */_createClass(Point,[{key:"update",value:function update(point){this.x=point.x;this.y=point.y;}/**
     * Get the difference for x and y axis to another point
     *
     * @param {Point} point
     * @returns {Point}
     */},{key:"getDifferenceTo",value:function getDifferenceTo(point){return new Point(this.x-point.x,this.y-point.y);}/**
     * Calculate distance to another point
     *
     * @param {Point} point
     * @returns {Point}
     */},{key:"getDistanceTo",value:function getDistanceTo(point){var diff=this.getDifferenceTo(point);return Math.sqrt(Math.pow(diff.x,2)+Math.pow(diff.y,2));}}]);return Point;}();exports.default=Point;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _exportNames={react:true,assertNode:true,createTypeAnnotationBasedOnTypeof:true,createUnionTypeAnnotation:true,cloneNode:true,clone:true,cloneDeep:true,cloneWithoutLoc:true,addComment:true,addComments:true,inheritInnerComments:true,inheritLeadingComments:true,inheritsComments:true,inheritTrailingComments:true,removeComments:true,ensureBlock:true,toBindingIdentifierName:true,toBlock:true,toComputedKey:true,toExpression:true,toIdentifier:true,toKeyAlias:true,toSequenceExpression:true,toStatement:true,valueToNode:true,appendToMemberExpression:true,inherits:true,prependToMemberExpression:true,removeProperties:true,removePropertiesDeep:true,removeTypeDuplicates:true,getBindingIdentifiers:true,getOuterBindingIdentifiers:true,traverse:true,traverseFast:true,shallowEqual:true,is:true,isBinding:true,isBlockScoped:true,isImmutable:true,isLet:true,isNode:true,isNodesEquivalent:true,isPlaceholderType:true,isReferenced:true,isScope:true,isSpecifierDefault:true,isType:true,isValidES3Identifier:true,isValidIdentifier:true,isVar:true,matchesPattern:true,validate:true,buildMatchMemberExpression:true};Object.defineProperty(exports,"assertNode",{enumerable:true,get:function get(){return _assertNode.default;}});Object.defineProperty(exports,"createTypeAnnotationBasedOnTypeof",{enumerable:true,get:function get(){return _createTypeAnnotationBasedOnTypeof.default;}});Object.defineProperty(exports,"createUnionTypeAnnotation",{enumerable:true,get:function get(){return _createUnionTypeAnnotation.default;}});Object.defineProperty(exports,"cloneNode",{enumerable:true,get:function get(){return _cloneNode.default;}});Object.defineProperty(exports,"clone",{enumerable:true,get:function get(){return _clone.default;}});Object.defineProperty(exports,"cloneDeep",{enumerable:true,get:function get(){return _cloneDeep.default;}});Object.defineProperty(exports,"cloneWithoutLoc",{enumerable:true,get:function get(){return _cloneWithoutLoc.default;}});Object.defineProperty(exports,"addComment",{enumerable:true,get:function get(){return _addComment.default;}});Object.defineProperty(exports,"addComments",{enumerable:true,get:function get(){return _addComments.default;}});Object.defineProperty(exports,"inheritInnerComments",{enumerable:true,get:function get(){return _inheritInnerComments.default;}});Object.defineProperty(exports,"inheritLeadingComments",{enumerable:true,get:function get(){return _inheritLeadingComments.default;}});Object.defineProperty(exports,"inheritsComments",{enumerable:true,get:function get(){return _inheritsComments.default;}});Object.defineProperty(exports,"inheritTrailingComments",{enumerable:true,get:function get(){return _inheritTrailingComments.default;}});Object.defineProperty(exports,"removeComments",{enumerable:true,get:function get(){return _removeComments.default;}});Object.defineProperty(exports,"ensureBlock",{enumerable:true,get:function get(){return _ensureBlock.default;}});Object.defineProperty(exports,"toBindingIdentifierName",{enumerable:true,get:function get(){return _toBindingIdentifierName.default;}});Object.defineProperty(exports,"toBlock",{enumerable:true,get:function get(){return _toBlock.default;}});Object.defineProperty(exports,"toComputedKey",{enumerable:true,get:function get(){return _toComputedKey.default;}});Object.defineProperty(exports,"toExpression",{enumerable:true,get:function get(){return _toExpression.default;}});Object.defineProperty(exports,"toIdentifier",{enumerable:true,get:function get(){return _toIdentifier.default;}});Object.defineProperty(exports,"toKeyAlias",{enumerable:true,get:function get(){return _toKeyAlias.default;}});Object.defineProperty(exports,"toSequenceExpression",{enumerable:true,get:function get(){return _toSequenceExpression.default;}});Object.defineProperty(exports,"toStatement",{enumerable:true,get:function get(){return _toStatement.default;}});Object.defineProperty(exports,"valueToNode",{enumerable:true,get:function get(){return _valueToNode.default;}});Object.defineProperty(exports,"appendToMemberExpression",{enumerable:true,get:function get(){return _appendToMemberExpression.default;}});Object.defineProperty(exports,"inherits",{enumerable:true,get:function get(){return _inherits.default;}});Object.defineProperty(exports,"prependToMemberExpression",{enumerable:true,get:function get(){return _prependToMemberExpression.default;}});Object.defineProperty(exports,"removeProperties",{enumerable:true,get:function get(){return _removeProperties.default;}});Object.defineProperty(exports,"removePropertiesDeep",{enumerable:true,get:function get(){return _removePropertiesDeep.default;}});Object.defineProperty(exports,"removeTypeDuplicates",{enumerable:true,get:function get(){return _removeTypeDuplicates.default;}});Object.defineProperty(exports,"getBindingIdentifiers",{enumerable:true,get:function get(){return _getBindingIdentifiers.default;}});Object.defineProperty(exports,"getOuterBindingIdentifiers",{enumerable:true,get:function get(){return _getOuterBindingIdentifiers.default;}});Object.defineProperty(exports,"traverse",{enumerable:true,get:function get(){return _traverse.default;}});Object.defineProperty(exports,"traverseFast",{enumerable:true,get:function get(){return _traverseFast.default;}});Object.defineProperty(exports,"shallowEqual",{enumerable:true,get:function get(){return _shallowEqual.default;}});Object.defineProperty(exports,"is",{enumerable:true,get:function get(){return _is.default;}});Object.defineProperty(exports,"isBinding",{enumerable:true,get:function get(){return _isBinding.default;}});Object.defineProperty(exports,"isBlockScoped",{enumerable:true,get:function get(){return _isBlockScoped.default;}});Object.defineProperty(exports,"isImmutable",{enumerable:true,get:function get(){return _isImmutable.default;}});Object.defineProperty(exports,"isLet",{enumerable:true,get:function get(){return _isLet.default;}});Object.defineProperty(exports,"isNode",{enumerable:true,get:function get(){return _isNode.default;}});Object.defineProperty(exports,"isNodesEquivalent",{enumerable:true,get:function get(){return _isNodesEquivalent.default;}});Object.defineProperty(exports,"isPlaceholderType",{enumerable:true,get:function get(){return _isPlaceholderType.default;}});Object.defineProperty(exports,"isReferenced",{enumerable:true,get:function get(){return _isReferenced.default;}});Object.defineProperty(exports,"isScope",{enumerable:true,get:function get(){return _isScope.default;}});Object.defineProperty(exports,"isSpecifierDefault",{enumerable:true,get:function get(){return _isSpecifierDefault.default;}});Object.defineProperty(exports,"isType",{enumerable:true,get:function get(){return _isType.default;}});Object.defineProperty(exports,"isValidES3Identifier",{enumerable:true,get:function get(){return _isValidES3Identifier.default;}});Object.defineProperty(exports,"isValidIdentifier",{enumerable:true,get:function get(){return _isValidIdentifier.default;}});Object.defineProperty(exports,"isVar",{enumerable:true,get:function get(){return _isVar.default;}});Object.defineProperty(exports,"matchesPattern",{enumerable:true,get:function get(){return _matchesPattern.default;}});Object.defineProperty(exports,"validate",{enumerable:true,get:function get(){return _validate.default;}});Object.defineProperty(exports,"buildMatchMemberExpression",{enumerable:true,get:function get(){return _buildMatchMemberExpression.default;}});exports.react=void 0;var _isReactComponent=_interopRequireDefault(__webpack_require__(469));var _isCompatTag=_interopRequireDefault(__webpack_require__(470));var _buildChildren=_interopRequireDefault(__webpack_require__(471));var _assertNode=_interopRequireDefault(__webpack_require__(552));var _generated=__webpack_require__(553);Object.keys(_generated).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _generated[key];}});});var _createTypeAnnotationBasedOnTypeof=_interopRequireDefault(__webpack_require__(554));var _createUnionTypeAnnotation=_interopRequireDefault(__webpack_require__(555));var _generated2=__webpack_require__(343);Object.keys(_generated2).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _generated2[key];}});});var _cloneNode=_interopRequireDefault(__webpack_require__(355));var _clone=_interopRequireDefault(__webpack_require__(418));var _cloneDeep=_interopRequireDefault(__webpack_require__(556));var _cloneWithoutLoc=_interopRequireDefault(__webpack_require__(557));var _addComment=_interopRequireDefault(__webpack_require__(558));var _addComments=_interopRequireDefault(__webpack_require__(419));var _inheritInnerComments=_interopRequireDefault(__webpack_require__(420));var _inheritLeadingComments=_interopRequireDefault(__webpack_require__(422));var _inheritsComments=_interopRequireDefault(__webpack_require__(423));var _inheritTrailingComments=_interopRequireDefault(__webpack_require__(424));var _removeComments=_interopRequireDefault(__webpack_require__(573));var _generated3=__webpack_require__(574);Object.keys(_generated3).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _generated3[key];}});});var _constants=__webpack_require__(350);Object.keys(_constants).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _constants[key];}});});var _ensureBlock=_interopRequireDefault(__webpack_require__(575));var _toBindingIdentifierName=_interopRequireDefault(__webpack_require__(576));var _toBlock=_interopRequireDefault(__webpack_require__(425));var _toComputedKey=_interopRequireDefault(__webpack_require__(577));var _toExpression=_interopRequireDefault(__webpack_require__(578));var _toIdentifier=_interopRequireDefault(__webpack_require__(426));var _toKeyAlias=_interopRequireDefault(__webpack_require__(579));var _toSequenceExpression=_interopRequireDefault(__webpack_require__(580));var _toStatement=_interopRequireDefault(__webpack_require__(582));var _valueToNode=_interopRequireDefault(__webpack_require__(583));var _definitions=__webpack_require__(341);Object.keys(_definitions).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _definitions[key];}});});var _appendToMemberExpression=_interopRequireDefault(__webpack_require__(587));var _inherits=_interopRequireDefault(__webpack_require__(588));var _prependToMemberExpression=_interopRequireDefault(__webpack_require__(589));var _removeProperties=_interopRequireDefault(__webpack_require__(429));var _removePropertiesDeep=_interopRequireDefault(__webpack_require__(427));var _removeTypeDuplicates=_interopRequireDefault(__webpack_require__(417));var _getBindingIdentifiers=_interopRequireDefault(__webpack_require__(364));var _getOuterBindingIdentifiers=_interopRequireDefault(__webpack_require__(590));var _traverse=_interopRequireDefault(__webpack_require__(591));var _traverseFast=_interopRequireDefault(__webpack_require__(428));var _shallowEqual=_interopRequireDefault(__webpack_require__(368));var _is=_interopRequireDefault(__webpack_require__(379));var _isBinding=_interopRequireDefault(__webpack_require__(592));var _isBlockScoped=_interopRequireDefault(__webpack_require__(593));var _isImmutable=_interopRequireDefault(__webpack_require__(594));var _isLet=_interopRequireDefault(__webpack_require__(430));var _isNode=_interopRequireDefault(__webpack_require__(416));var _isNodesEquivalent=_interopRequireDefault(__webpack_require__(595));var _isPlaceholderType=_interopRequireDefault(__webpack_require__(413));var _isReferenced=_interopRequireDefault(__webpack_require__(596));var _isScope=_interopRequireDefault(__webpack_require__(597));var _isSpecifierDefault=_interopRequireDefault(__webpack_require__(598));var _isType=_interopRequireDefault(__webpack_require__(380));var _isValidES3Identifier=_interopRequireDefault(__webpack_require__(599));var _isValidIdentifier=_interopRequireDefault(__webpack_require__(354));var _isVar=_interopRequireDefault(__webpack_require__(600));var _matchesPattern=_interopRequireDefault(__webpack_require__(393));var _validate=_interopRequireDefault(__webpack_require__(415));var _buildMatchMemberExpression=_interopRequireDefault(__webpack_require__(392));var _generated4=__webpack_require__(340);Object.keys(_generated4).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _generated4[key];}});});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var react={isReactComponent:_isReactComponent.default,isCompatTag:_isCompatTag.default,buildChildren:_buildChildren.default};exports.react=react;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=buildMatchMemberExpression;var _matchesPattern=_interopRequireDefault(__webpack_require__(393));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function buildMatchMemberExpression(match,allowPartial){var parts=match.split(".");return function(member){return(0,_matchesPattern.default)(member,parts,allowPartial);};}

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=matchesPattern;var _generated=__webpack_require__(340);function matchesPattern(member,match,allowPartial){if(!(0,_generated.isMemberExpression)(member))return false;var parts=Array.isArray(match)?match:match.split(".");var nodes=[];var node;for(node=member;(0,_generated.isMemberExpression)(node);node=node.object){nodes.push(node.property);}nodes.push(node);if(nodes.length<parts.length)return false;if(!allowPartial&&nodes.length>parts.length)return false;for(var i=0,j=nodes.length-1;i<parts.length;i++,j--){var _node=nodes[j];var value=void 0;if((0,_generated.isIdentifier)(_node)){value=_node.name;}else if((0,_generated.isStringLiteral)(_node)){value=_node.value;}else{return false;}if(parts[i]!==value)return false;}return true;}

/***/ }),
/* 394 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(351),isObject=__webpack_require__(353);/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(94)))

/***/ }),
/* 397 */
/***/ (function(module, exports) {

/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear=__webpack_require__(493),mapCacheDelete=__webpack_require__(500),mapCacheGet=__webpack_require__(502),mapCacheHas=__webpack_require__(503),mapCacheSet=__webpack_require__(504);/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue=__webpack_require__(400),eq=__webpack_require__(394);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignValue;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty=__webpack_require__(506);/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}module.exports=baseAssignValue;

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes=__webpack_require__(508),isArguments=__webpack_require__(509),isArray=__webpack_require__(372),isBuffer=__webpack_require__(402),isIndex=__webpack_require__(512),isTypedArray=__webpack_require__(513);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var root=__webpack_require__(345),stubFalse=__webpack_require__(511);/** Detect free variable `exports`. */var freeExports=( false?undefined:_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?undefined:_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(132)(module)))

/***/ }),
/* 403 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;

/***/ }),
/* 404 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction=__webpack_require__(395),isLength=__webpack_require__(403);/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys=__webpack_require__(401),baseKeysIn=__webpack_require__(518),isArrayLike=__webpack_require__(405);/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}module.exports=keysIn;

/***/ }),
/* 407 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush=__webpack_require__(409),getPrototype=__webpack_require__(375),getSymbols=__webpack_require__(374),stubArray=__webpack_require__(407);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};module.exports=getSymbolsIn;

/***/ }),
/* 409 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush=__webpack_require__(409),isArray=__webpack_require__(372);/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348),root=__webpack_require__(345);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;

/***/ }),
/* 412 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/(function(){'use strict';var ES6Regex,ES5Regex,NON_ASCII_WHITESPACES,IDENTIFIER_START,IDENTIFIER_PART,ch;// See `tools/generate-identifier-regex.js`.
ES5Regex={// ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,// ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/};ES6Regex={// ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,// ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};function isDecimalDigit(ch){return 0x30<=ch&&ch<=0x39;// 0..9
}function isHexDigit(ch){return 0x30<=ch&&ch<=0x39||// 0..9
0x61<=ch&&ch<=0x66||// a..f
0x41<=ch&&ch<=0x46;// A..F
}function isOctalDigit(ch){return ch>=0x30&&ch<=0x37;// 0..7
}// 7.2 White Space
NON_ASCII_WHITESPACES=[0x1680,0x180E,0x2000,0x2001,0x2002,0x2003,0x2004,0x2005,0x2006,0x2007,0x2008,0x2009,0x200A,0x202F,0x205F,0x3000,0xFEFF];function isWhiteSpace(ch){return ch===0x20||ch===0x09||ch===0x0B||ch===0x0C||ch===0xA0||ch>=0x1680&&NON_ASCII_WHITESPACES.indexOf(ch)>=0;}// 7.3 Line Terminators
function isLineTerminator(ch){return ch===0x0A||ch===0x0D||ch===0x2028||ch===0x2029;}// 7.6 Identifier Names and Identifiers
function fromCodePoint(cp){if(cp<=0xFFFF){return String.fromCharCode(cp);}var cu1=String.fromCharCode(Math.floor((cp-0x10000)/0x400)+0xD800);var cu2=String.fromCharCode((cp-0x10000)%0x400+0xDC00);return cu1+cu2;}IDENTIFIER_START=new Array(0x80);for(ch=0;ch<0x80;++ch){IDENTIFIER_START[ch]=ch>=0x61&&ch<=0x7A||// a..z
ch>=0x41&&ch<=0x5A||// A..Z
ch===0x24||ch===0x5F;// $ (dollar) and _ (underscore)
}IDENTIFIER_PART=new Array(0x80);for(ch=0;ch<0x80;++ch){IDENTIFIER_PART[ch]=ch>=0x61&&ch<=0x7A||// a..z
ch>=0x41&&ch<=0x5A||// A..Z
ch>=0x30&&ch<=0x39||// 0..9
ch===0x24||ch===0x5F;// $ (dollar) and _ (underscore)
}function isIdentifierStartES5(ch){return ch<0x80?IDENTIFIER_START[ch]:ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));}function isIdentifierPartES5(ch){return ch<0x80?IDENTIFIER_PART[ch]:ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));}function isIdentifierStartES6(ch){return ch<0x80?IDENTIFIER_START[ch]:ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));}function isIdentifierPartES6(ch){return ch<0x80?IDENTIFIER_PART[ch]:ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));}module.exports={isDecimalDigit:isDecimalDigit,isHexDigit:isHexDigit,isOctalDigit:isOctalDigit,isWhiteSpace:isWhiteSpace,isLineTerminator:isLineTerminator,isIdentifierStartES5:isIdentifierStartES5,isIdentifierPartES5:isIdentifierPartES5,isIdentifierStartES6:isIdentifierStartES6,isIdentifierPartES6:isIdentifierPartES6};})();/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isPlaceholderType;var _definitions=__webpack_require__(341);function isPlaceholderType(placeholderType,targetType){if(placeholderType===targetType)return true;var aliases=_definitions.PLACEHOLDERS_ALIAS[placeholderType];if(aliases){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=aliases[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var alias=_step.value;if(targetType===alias)return true;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}return false;}

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.PLACEHOLDERS_FLIPPED_ALIAS=exports.PLACEHOLDERS_ALIAS=exports.PLACEHOLDERS=void 0;var _utils=__webpack_require__(347);var PLACEHOLDERS=["Identifier","StringLiteral","Expression","Statement","Declaration","BlockStatement","ClassBody","Pattern"];exports.PLACEHOLDERS=PLACEHOLDERS;var PLACEHOLDERS_ALIAS={Declaration:["Statement"],Pattern:["PatternLike","LVal"]};exports.PLACEHOLDERS_ALIAS=PLACEHOLDERS_ALIAS;for(var _i=0,_PLACEHOLDERS=PLACEHOLDERS;_i<_PLACEHOLDERS.length;_i++){var type=_PLACEHOLDERS[_i];var alias=_utils.ALIAS_KEYS[type];if(alias&&alias.length)PLACEHOLDERS_ALIAS[type]=alias;}var PLACEHOLDERS_FLIPPED_ALIAS={};exports.PLACEHOLDERS_FLIPPED_ALIAS=PLACEHOLDERS_FLIPPED_ALIAS;Object.keys(PLACEHOLDERS_ALIAS).forEach(function(type){PLACEHOLDERS_ALIAS[type].forEach(function(alias){if(!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS,alias)){PLACEHOLDERS_FLIPPED_ALIAS[alias]=[];}PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);});});

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=validate;var _definitions=__webpack_require__(341);function validate(node,key,val){if(!node)return;var fields=_definitions.NODE_FIELDS[node.type];if(!fields)return;var field=fields[key];if(!field||!field.validate)return;if(field.optional&&val==null)return;field.validate(node,key,val);}

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isNode;var _definitions=__webpack_require__(341);function isNode(node){return!!(node&&_definitions.VISITOR_KEYS[node.type]);}

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=removeTypeDuplicates;var _generated=__webpack_require__(340);function removeTypeDuplicates(nodes){var generics={};var bases={};var typeGroups=[];var types=[];for(var i=0;i<nodes.length;i++){var node=nodes[i];if(!node)continue;if(types.indexOf(node)>=0){continue;}if((0,_generated.isAnyTypeAnnotation)(node)){return[node];}if((0,_generated.isFlowBaseAnnotation)(node)){bases[node.type]=node;continue;}if((0,_generated.isUnionTypeAnnotation)(node)){if(typeGroups.indexOf(node.types)<0){nodes=nodes.concat(node.types);typeGroups.push(node.types);}continue;}if((0,_generated.isGenericTypeAnnotation)(node)){var name=node.id.name;if(generics[name]){var existing=generics[name];if(existing.typeParameters){if(node.typeParameters){existing.typeParameters.params=removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));}}else{existing=node.typeParameters;}}else{generics[name]=node;}continue;}types.push(node);}for(var _i=0,_Object$keys=Object.keys(bases);_i<_Object$keys.length;_i++){var type=_Object$keys[_i];types.push(bases[type]);}for(var _i2=0,_Object$keys2=Object.keys(generics);_i2<_Object$keys2.length;_i2++){var _name=_Object$keys2[_i2];types.push(generics[_name]);}return types;}

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=clone;var _cloneNode=_interopRequireDefault(__webpack_require__(355));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function clone(node){return(0,_cloneNode.default)(node,false);}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=addComments;function addComments(node,type,comments){if(!comments||!node)return node;var key="".concat(type,"Comments");if(node[key]){if(type==="leading"){node[key]=comments.concat(node[key]);}else{node[key]=node[key].concat(comments);}}else{node[key]=comments;}return node;}

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inheritInnerComments;var _inherit=_interopRequireDefault(__webpack_require__(382));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inheritInnerComments(child,parent){(0,_inherit.default)("innerComments",child,parent);}

/***/ }),
/* 421 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inheritLeadingComments;var _inherit=_interopRequireDefault(__webpack_require__(382));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inheritLeadingComments(child,parent){(0,_inherit.default)("leadingComments",child,parent);}

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inheritsComments;var _inheritTrailingComments=_interopRequireDefault(__webpack_require__(424));var _inheritLeadingComments=_interopRequireDefault(__webpack_require__(422));var _inheritInnerComments=_interopRequireDefault(__webpack_require__(420));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inheritsComments(child,parent){(0,_inheritTrailingComments.default)(child,parent);(0,_inheritLeadingComments.default)(child,parent);(0,_inheritInnerComments.default)(child,parent);return child;}

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inheritTrailingComments;var _inherit=_interopRequireDefault(__webpack_require__(382));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inheritTrailingComments(child,parent){(0,_inherit.default)("trailingComments",child,parent);}

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toBlock;var _generated=__webpack_require__(340);var _generated2=__webpack_require__(343);function toBlock(node,parent){if((0,_generated.isBlockStatement)(node)){return node;}var blockNodes=[];if((0,_generated.isEmptyStatement)(node)){blockNodes=[];}else{if(!(0,_generated.isStatement)(node)){if((0,_generated.isFunction)(parent)){node=(0,_generated2.returnStatement)(node);}else{node=(0,_generated2.expressionStatement)(node);}}blockNodes=[node];}return(0,_generated2.blockStatement)(blockNodes);}

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toIdentifier;var _isValidIdentifier=_interopRequireDefault(__webpack_require__(354));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function toIdentifier(name){name=name+"";name=name.replace(/[^a-zA-Z0-9$_]/g,"-");name=name.replace(/^[-0-9]+/,"");name=name.replace(/[-\s]+(.)?/g,function(match,c){return c?c.toUpperCase():"";});if(!(0,_isValidIdentifier.default)(name)){name="_".concat(name);}return name||"_";}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=removePropertiesDeep;var _traverseFast=_interopRequireDefault(__webpack_require__(428));var _removeProperties=_interopRequireDefault(__webpack_require__(429));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function removePropertiesDeep(tree,opts){(0,_traverseFast.default)(tree,_removeProperties.default,opts);return tree;}

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=traverseFast;var _definitions=__webpack_require__(341);function traverseFast(node,enter,opts){if(!node)return;var keys=_definitions.VISITOR_KEYS[node.type];if(!keys)return;opts=opts||{};enter(node,opts);var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=keys[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;var subNode=node[key];if(Array.isArray(subNode)){var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=subNode[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _node=_step2.value;traverseFast(_node,enter,opts);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}else{traverseFast(subNode,enter,opts);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=removeProperties;var _constants=__webpack_require__(350);var CLEAR_KEYS=["tokens","start","end","loc","raw","rawValue"];var CLEAR_KEYS_PLUS_COMMENTS=_constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);function removeProperties(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var map=opts.preserveComments?CLEAR_KEYS:CLEAR_KEYS_PLUS_COMMENTS;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=map[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;if(node[key]!=null)node[key]=undefined;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}for(var _i=0,_Object$keys=Object.keys(node);_i<_Object$keys.length;_i++){var _key=_Object$keys[_i];if(_key[0]==="_"&&node[_key]!=null)node[_key]=undefined;}var symbols=Object.getOwnPropertySymbols(node);var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=symbols[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var sym=_step2.value;node[sym]=null;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isLet;var _generated=__webpack_require__(340);var _constants=__webpack_require__(350);function isLet(node){return(0,_generated.isVariableDeclaration)(node)&&(node.kind!=="var"||node[_constants.BLOCK_SCOPED_SYMBOL]);}

/***/ }),
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./packages/webpack/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./packages/client/node_modules/prop-types/index.js
var prop_types = __webpack_require__(346);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./packages/client/node_modules/lazy-brush/lib/index.js
var lib = __webpack_require__(464);

// EXTERNAL MODULE: ./packages/client/node_modules/catenary-curve/lib/index.js
var catenary_curve_lib = __webpack_require__(466);

// EXTERNAL MODULE: ./packages/client/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(468);

// CONCATENATED MODULE: ./packages/client/node_modules/react-canvas-draw/es/drawImage.js
/** 
 * Original from: https://stackoverflow.com/questions/21961839/simulation-background-size-cover-in-canvas
 * Original By Ken Fyrstenberg Nilsen
 * 
 * Note: img must be fully loaded or have correct width & height set.
 */function drawImageProp(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},ctx=_ref.ctx,img=_ref.img,x=_ref.x,y=_ref.y,w=_ref.w,h=_ref.h,offsetX=_ref.offsetX,offsetY=_ref.offsetY;// Defaults
if(typeof x!=="number")x=0;if(typeof y!=="number")y=0;if(typeof w!=="number")w=ctx.canvas.width;if(typeof h!=="number")h=ctx.canvas.height;if(typeof offsetX!=="number")offsetX=0.5;if(typeof offsetY!=="number")offsetY=0.5;// keep bounds [0.0, 1.0]
if(offsetX<0)offsetX=0;if(offsetY<0)offsetY=0;if(offsetX>1)offsetX=1;if(offsetY>1)offsetY=1;var iw=img.width,ih=img.height,r=Math.min(w/iw,h/ih),nw=iw*r,// new prop. width
nh=ih*r,// new prop. height
cx,cy,cw,ch,ar=1;// decide which gap to fill
if(nw<w)ar=w/nw;if(Math.abs(ar-1)<1e-14&&nh<h)ar=h/nh;// updated
nw*=ar;nh*=ar;// calc source rectangle
cw=iw/(nw/w);ch=ih/(nh/h);cx=(iw-cw)*offsetX;cy=(ih-ch)*offsetY;// make sure source rectangle is valid
if(cx<0)cx=0;if(cy<0)cy=0;if(cw>iw)cw=iw;if(ch>ih)ch=ih;// fill image in dest. rectangle
ctx.drawImage(img,cx,cy,cw,ch,x,y,w,h);}
// CONCATENATED MODULE: ./packages/client/node_modules/react-canvas-draw/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return es_default; });
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _class,_temp;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(_typeof(call)==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+_typeof(superClass));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function midPointBtw(p1,p2){return{x:p1.x+(p2.x-p1.x)/2,y:p1.y+(p2.y-p1.y)/2};}var canvasStyle={display:"block",position:"absolute"};var canvasTypes=[{name:"interface",zIndex:15},{name:"drawing",zIndex:11},{name:"temp",zIndex:12},{name:"grid",zIndex:10}];var dimensionsPropTypes=prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]);var es_default=(_temp=_class=function(_PureComponent){_inherits(_default,_PureComponent);function _default(props){_classCallCheck(this,_default);var _this=_possibleConstructorReturn(this,_PureComponent.call(this,props));_this.componentWillUnmount=function(){_this.canvasObserver.unobserve(_this.canvasContainer);};_this.drawImage=function(){if(!_this.props.imgSrc)return;// Load the image
_this.image=new Image();_this.image.src=_this.props.imgSrc;// Draw the image once loaded
_this.image.onload=function(){return drawImageProp({ctx:_this.ctx.grid,img:_this.image});};};_this.undo=function(){var lines=_this.lines.slice(0,-1);_this.clear();_this.simulateDrawingLines({lines:lines,immediate:true});};_this.getSaveData=function(){// Construct and return the stringified saveData object
return JSON.stringify({lines:_this.lines,width:_this.props.canvasWidth,height:_this.props.canvasHeight});};_this.loadSaveData=function(saveData){var immediate=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this.props.immediateLoading;if(typeof saveData!=="string"){throw new Error("saveData needs to be of type string!");}var _JSON$parse=JSON.parse(saveData),lines=_JSON$parse.lines,width=_JSON$parse.width,height=_JSON$parse.height;if(!lines||typeof lines.push!=="function"){throw new Error("saveData.lines needs to be an array!");}_this.clear();if(width===_this.props.canvasWidth&&height===_this.props.canvasHeight){_this.simulateDrawingLines({lines:lines,immediate:immediate});}else{// we need to rescale the lines based on saved & current dimensions
var scaleX=_this.props.canvasWidth/width;var scaleY=_this.props.canvasHeight/height;var scaleAvg=(scaleX+scaleY)/2;_this.simulateDrawingLines({lines:lines.map(function(line){return _extends({},line,{points:line.points.map(function(p){return{x:p.x*scaleX,y:p.y*scaleY};}),brushRadius:line.brushRadius*scaleAvg});}),immediate:immediate});}};_this.simulateDrawingLines=function(_ref){var lines=_ref.lines,immediate=_ref.immediate;// Simulate live-drawing of the loaded lines
// TODO use a generator
var curTime=0;var timeoutGap=immediate?0:_this.props.loadTimeOffset;lines.forEach(function(line){var points=line.points,brushColor=line.brushColor,brushRadius=line.brushRadius;var _loop=function _loop(i){curTime+=timeoutGap;window.setTimeout(function(){_this.drawPoints({points:points.slice(0,i+1),brushColor:brushColor,brushRadius:brushRadius});},curTime);};for(var i=1;i<points.length;i++){_loop(i);}curTime+=timeoutGap;window.setTimeout(function(){// Save this line with its props instead of this.props
_this.points=points;_this.saveLine({brushColor:brushColor,brushRadius:brushRadius});},curTime);});};_this.handleTouchStart=function(e){var _this$getPointerPos=_this.getPointerPos(e),x=_this$getPointerPos.x,y=_this$getPointerPos.y;_this.lazy.update({x:x,y:y},{both:true});_this.handleMouseDown(e);_this.mouseHasMoved=true;};_this.handleTouchMove=function(e){e.preventDefault();var _this$getPointerPos2=_this.getPointerPos(e),x=_this$getPointerPos2.x,y=_this$getPointerPos2.y;_this.handlePointerMove(x,y);};_this.handleTouchEnd=function(e){_this.handleMouseUp(e);var brush=_this.lazy.getBrushCoordinates();_this.lazy.update({x:brush.x,y:brush.y},{both:true});_this.mouseHasMoved=true;};_this.handleMouseDown=function(e){e.preventDefault();_this.isPressing=true;};_this.handleMouseMove=function(e){var _this$getPointerPos3=_this.getPointerPos(e),x=_this$getPointerPos3.x,y=_this$getPointerPos3.y;_this.handlePointerMove(x,y);};_this.handleMouseUp=function(e){e.preventDefault();_this.isDrawing=false;_this.isPressing=false;_this.saveLine();};_this.handleCanvasResize=function(entries,observer){var saveData=_this.getSaveData();for(var _iterator=entries,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref2;if(_isArray){if(_i>=_iterator.length)break;_ref2=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref2=_i.value;}var entry=_ref2;var _entry$contentRect=entry.contentRect,width=_entry$contentRect.width,height=_entry$contentRect.height;_this.setCanvasSize(_this.canvas.interface,width,height);_this.setCanvasSize(_this.canvas.drawing,width,height);_this.setCanvasSize(_this.canvas.temp,width,height);_this.setCanvasSize(_this.canvas.grid,width,height);_this.drawGrid(_this.ctx.grid);_this.loop({once:true});}_this.loadSaveData(saveData,true);};_this.setCanvasSize=function(canvas,width,height){canvas.width=width;canvas.height=height;canvas.style.width=width;canvas.style.height=height;};_this.getPointerPos=function(e){var rect=_this.canvas.interface.getBoundingClientRect();// use cursor pos as default
var clientX=e.clientX;var clientY=e.clientY;// use first touch if available
if(e.changedTouches&&e.changedTouches.length>0){clientX=e.changedTouches[0].clientX;clientY=e.changedTouches[0].clientY;}// return mouse/touch position inside canvas
return{x:clientX-rect.left,y:clientY-rect.top};};_this.handlePointerMove=function(x,y){if(_this.props.disabled)return;var hasChanged=_this.lazy.update({x:x,y:y});var isDisabled=!_this.lazy.isEnabled();if(_this.isPressing&&hasChanged&&!_this.isDrawing||isDisabled&&_this.isPressing){// Start drawing and add point
_this.isDrawing=true;_this.points.push(_this.lazy.brush.toObject());}if(_this.isDrawing&&(_this.lazy.brushHasMoved()||isDisabled)){// Add new point
_this.points.push(_this.lazy.brush.toObject());// Draw current points
_this.drawPoints({points:_this.points,brushColor:_this.props.brushColor,brushRadius:_this.props.brushRadius});}_this.mouseHasMoved=true;};_this.drawPoints=function(_ref3){var points=_ref3.points,brushColor=_ref3.brushColor,brushRadius=_ref3.brushRadius;_this.ctx.temp.lineJoin="round";_this.ctx.temp.lineCap="round";_this.ctx.temp.strokeStyle=brushColor;_this.ctx.temp.clearRect(0,0,_this.ctx.temp.canvas.width,_this.ctx.temp.canvas.height);_this.ctx.temp.lineWidth=brushRadius*2;var p1=points[0];var p2=points[1];_this.ctx.temp.moveTo(p2.x,p2.y);_this.ctx.temp.beginPath();for(var i=1,len=points.length;i<len;i++){// we pick the point between pi+1 & pi+2 as the
// end point and p1 as our control point
var midPoint=midPointBtw(p1,p2);_this.ctx.temp.quadraticCurveTo(p1.x,p1.y,midPoint.x,midPoint.y);p1=points[i];p2=points[i+1];}// Draw last line as a straight line while
// we wait for the next point to be able to calculate
// the bezier control point
_this.ctx.temp.lineTo(p1.x,p1.y);_this.ctx.temp.stroke();};_this.saveLine=function(){var _ref4=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},brushColor=_ref4.brushColor,brushRadius=_ref4.brushRadius;if(_this.points.length<2)return;// Save as new line
_this.lines.push({points:[].concat(_this.points),brushColor:brushColor||_this.props.brushColor,brushRadius:brushRadius||_this.props.brushRadius});// Reset points array
_this.points.length=0;var width=_this.canvas.temp.width;var height=_this.canvas.temp.height;// Copy the line to the drawing canvas
_this.ctx.drawing.drawImage(_this.canvas.temp,0,0,width,height);// Clear the temporary line-drawing canvas
_this.ctx.temp.clearRect(0,0,width,height);};_this.clear=function(){_this.lines=[];_this.valuesChanged=true;_this.ctx.drawing.clearRect(0,0,_this.canvas.drawing.width,_this.canvas.drawing.height);_this.ctx.temp.clearRect(0,0,_this.canvas.temp.width,_this.canvas.temp.height);};_this.loop=function(){var _ref5=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref5$once=_ref5.once,once=_ref5$once===undefined?false:_ref5$once;if(_this.mouseHasMoved||_this.valuesChanged){var pointer=_this.lazy.getPointerCoordinates();var brush=_this.lazy.getBrushCoordinates();_this.drawInterface(_this.ctx.interface,pointer,brush);_this.mouseHasMoved=false;_this.valuesChanged=false;}if(!once){window.requestAnimationFrame(function(){_this.loop();});}};_this.drawGrid=function(ctx){if(_this.props.hideGrid)return;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.beginPath();ctx.setLineDash([5,1]);ctx.setLineDash([]);ctx.strokeStyle=_this.props.gridColor;ctx.lineWidth=0.5;var gridSize=25;var countX=0;while(countX<ctx.canvas.width){countX+=gridSize;ctx.moveTo(countX,0);ctx.lineTo(countX,ctx.canvas.height);}ctx.stroke();var countY=0;while(countY<ctx.canvas.height){countY+=gridSize;ctx.moveTo(0,countY);ctx.lineTo(ctx.canvas.width,countY);}ctx.stroke();};_this.drawInterface=function(ctx,pointer,brush){ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);// Draw brush preview
ctx.beginPath();ctx.fillStyle=_this.props.brushColor;ctx.arc(brush.x,brush.y,_this.props.brushRadius,0,Math.PI*2,true);ctx.fill();// Draw mouse point (the one directly at the cursor)
ctx.beginPath();ctx.fillStyle=_this.props.catenaryColor;ctx.arc(pointer.x,pointer.y,4,0,Math.PI*2,true);ctx.fill();// Draw catenary
if(_this.lazy.isEnabled()){ctx.beginPath();ctx.lineWidth=2;ctx.lineCap="round";ctx.setLineDash([2,4]);ctx.strokeStyle=_this.props.catenaryColor;_this.catenary.drawToCanvas(_this.ctx.interface,brush,pointer,_this.chainLength);ctx.stroke();}// Draw brush point (the one in the middle of the brush preview)
ctx.beginPath();ctx.fillStyle=_this.props.catenaryColor;ctx.arc(brush.x,brush.y,2,0,Math.PI*2,true);ctx.fill();};_this.canvas={};_this.ctx={};_this.catenary=new catenary_curve_lib["Catenary"]();_this.points=[];_this.lines=[];_this.mouseHasMoved=true;_this.valuesChanged=true;_this.isDrawing=false;_this.isPressing=false;return _this;}_default.prototype.componentDidMount=function componentDidMount(){var _this2=this;this.lazy=new lib["LazyBrush"]({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:true,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}});this.chainLength=this.props.lazyRadius*window.devicePixelRatio;this.canvasObserver=new ResizeObserver_es["a" /* default */](function(entries,observer){return _this2.handleCanvasResize(entries,observer);});this.canvasObserver.observe(this.canvasContainer);this.drawImage();this.loop();window.setTimeout(function(){var initX=window.innerWidth/2;var initY=window.innerHeight/2;_this2.lazy.update({x:initX-_this2.chainLength/4,y:initY},{both:true});_this2.lazy.update({x:initX+_this2.chainLength/4,y:initY},{both:false});_this2.mouseHasMoved=true;_this2.valuesChanged=true;_this2.clear();// Load saveData from prop if it exists
if(_this2.props.saveData){_this2.loadSaveData(_this2.props.saveData);}},100);};_default.prototype.componentDidUpdate=function componentDidUpdate(prevProps){if(prevProps.lazyRadius!==this.props.lazyRadius){// Set new lazyRadius values
this.chainLength=this.props.lazyRadius*window.devicePixelRatio;this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio);}if(prevProps.saveData!==this.props.saveData){this.loadSaveData(this.props.saveData);}if(JSON.stringify(prevProps)!==JSON.stringify(this.props)){// Signal this.loop function that values changed
this.valuesChanged=true;}};_default.prototype.render=function render(){var _this3=this;return react_default.a.createElement("div",{className:this.props.className,style:_extends({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function ref(container){if(container){_this3.canvasContainer=container;}}},canvasTypes.map(function(_ref6){var name=_ref6.name,zIndex=_ref6.zIndex;var isInterface=name==="interface";return react_default.a.createElement("canvas",{key:name,ref:function ref(canvas){if(canvas){_this3.canvas[name]=canvas;_this3.ctx[name]=canvas.getContext("2d");}},style:_extends({},canvasStyle,{zIndex:zIndex}),onMouseDown:isInterface?_this3.handleMouseDown:undefined,onMouseMove:isInterface?_this3.handleMouseMove:undefined,onMouseUp:isInterface?_this3.handleMouseUp:undefined,onMouseOut:isInterface?_this3.handleMouseUp:undefined,onTouchStart:isInterface?_this3.handleTouchStart:undefined,onTouchMove:isInterface?_this3.handleTouchMove:undefined,onTouchEnd:isInterface?_this3.handleTouchEnd:undefined,onTouchCancel:isInterface?_this3.handleTouchEnd:undefined});}));};return _default;}(react["PureComponent"]),_class.propTypes={loadTimeOffset:prop_types_default.a.number,lazyRadius:prop_types_default.a.number,brushRadius:prop_types_default.a.number,brushColor:prop_types_default.a.string,catenaryColor:prop_types_default.a.string,gridColor:prop_types_default.a.string,backgroundColor:prop_types_default.a.string,hideGrid:prop_types_default.a.bool,canvasWidth:dimensionsPropTypes,canvasHeight:dimensionsPropTypes,disabled:prop_types_default.a.bool,imgSrc:prop_types_default.a.string,saveData:prop_types_default.a.string,immediateLoading:prop_types_default.a.bool},_class.defaultProps={loadTimeOffset:5,lazyRadius:12,brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:false,canvasWidth:400,canvasHeight:400,disabled:false,imgSrc:"",saveData:"",immediateLoading:false},_temp);

/***/ }),
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.LazyPoint=exports.Point=exports.LazyBrush=undefined;var _LazyBrush=__webpack_require__(465);var _LazyBrush2=_interopRequireDefault(_LazyBrush);var _Point=__webpack_require__(389);var _Point2=_interopRequireDefault(_Point);var _LazyPoint=__webpack_require__(388);var _LazyPoint2=_interopRequireDefault(_LazyPoint);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.LazyBrush=_LazyBrush2.default;exports.Point=_Point2.default;exports.LazyPoint=_LazyPoint2.default;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _LazyPoint=__webpack_require__(388);var _LazyPoint2=_interopRequireDefault(_LazyPoint);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var RADIUS_DEFAULT=30;var LazyBrush=function(){/**
   * constructor
   *
   * @param {object} settings
   * @param {number} settings.radius The radius for the lazy area
   * @param {boolean} settings.enabled
   */function LazyBrush(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$radius=_ref.radius,radius=_ref$radius===undefined?RADIUS_DEFAULT:_ref$radius,_ref$enabled=_ref.enabled,enabled=_ref$enabled===undefined?true:_ref$enabled,_ref$initialPoint=_ref.initialPoint,initialPoint=_ref$initialPoint===undefined?{x:0,y:0}:_ref$initialPoint;_classCallCheck(this,LazyBrush);this.radius=radius;this._isEnabled=enabled;this.pointer=new _LazyPoint2.default(initialPoint.x,initialPoint.y);this.brush=new _LazyPoint2.default(initialPoint.x,initialPoint.y);this.angle=0;this.distance=0;this._hasMoved=false;}/**
   * Enable lazy brush calculations.
   *
   */_createClass(LazyBrush,[{key:'enable',value:function enable(){this._isEnabled=true;}/**
     * Disable lazy brush calculations.
     *
     */},{key:'disable',value:function disable(){this._isEnabled=false;}/**
     * @returns {boolean}
     */},{key:'isEnabled',value:function isEnabled(){return this._isEnabled;}/**
     * Update the radius
     *
     * @param {number} radius
     */},{key:'setRadius',value:function setRadius(radius){this.radius=radius;}/**
     * Return the current radius
     *
     * @returns {number}
     */},{key:'getRadius',value:function getRadius(){return this.radius;}/**
     * Return the brush coordinates as a simple object
     *
     * @returns {object}
     */},{key:'getBrushCoordinates',value:function getBrushCoordinates(){return this.brush.toObject();}/**
     * Return the pointer coordinates as a simple object
     *
     * @returns {object}
     */},{key:'getPointerCoordinates',value:function getPointerCoordinates(){return this.pointer.toObject();}/**
     * Return the brush as a LazyPoint
     *
     * @returns {LazyPoint}
     */},{key:'getBrush',value:function getBrush(){return this.brush;}/**
     * Return the pointer as a LazyPoint
     *
     * @returns {LazyPoint}
     */},{key:'getPointer',value:function getPointer(){return this.pointer;}/**
     * Return the angle between pointer and brush
     *
     * @returns {number} Angle in radians
     */},{key:'getAngle',value:function getAngle(){return this.angle;}/**
     * Return the distance between pointer and brush
     *
     * @returns {number} Distance in pixels
     */},{key:'getDistance',value:function getDistance(){return this.distance;}/**
     * Return if the previous update has moved the brush.
     *
     * @returns {boolean} Whether the brush moved previously.
     */},{key:'brushHasMoved',value:function brushHasMoved(){return this._hasMoved;}/**
     * Updates the pointer point and calculates the new brush point.
     *
     * @param {Point} newPointerPoint
     * @param {Object} options
     * @param {Boolean} options.both Force update pointer and brush
     * @returns {Boolean} Whether any of the two points changed
     */},{key:'update',value:function update(newPointerPoint){var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref2$both=_ref2.both,both=_ref2$both===undefined?false:_ref2$both;this._hasMoved=false;if(this.pointer.equalsTo(newPointerPoint)&&!both){return false;}this.pointer.update(newPointerPoint);if(both){this._hasMoved=true;this.brush.update(newPointerPoint);return true;}if(this._isEnabled){this.distance=this.pointer.getDistanceTo(this.brush);this.angle=this.pointer.getAngleTo(this.brush);if(this.distance>this.radius){this.brush.moveByAngle(this.angle,this.distance-this.radius);this._hasMoved=true;}}else{this.distance=0;this.angle=0;this.brush.update(newPointerPoint);this._hasMoved=true;}return true;}}]);return LazyBrush;}();exports.default=LazyBrush;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.Point=exports.Catenary=undefined;var _Catenary=__webpack_require__(467);var _Catenary2=_interopRequireDefault(_Catenary);var _Point=__webpack_require__(390);var _Point2=_interopRequireDefault(_Point);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.Catenary=_Catenary2.default;exports.Point=_Point2.default;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Given two points and a length, calculate and draw the catenary.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * JavaScript implementation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2018 Jan Hug <me@dulnan.net>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Released under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ----------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Original ActionScript implementation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright poiasd ( http://wonderfl.net/user/poiasd )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MIT License ( http://www.opensource.org/licenses/mit-license.php )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Downloaded from: http://wonderfl.net/c/8Bnl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ----------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Archived by and downloaded from:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://wa.zozuar.org/code.php?c=8Bnl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var _Point=__webpack_require__(390);var _Point2=_interopRequireDefault(_Point);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var EPSILON=1e-6;var Catenary=function(){/**
   * constructor
   *
   * @param {Object} settings
   * @param {Number} settings.segments Number of segments of the chain.
   * @param {Number} settings.iterationLimit Maximum amount iterations for getting catenary parameters.
   */function Catenary(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$segments=_ref.segments,segments=_ref$segments===undefined?50:_ref$segments,_ref$iterationLimit=_ref.iterationLimit,iterationLimit=_ref$iterationLimit===undefined?100:_ref$iterationLimit;_classCallCheck(this,Catenary);this.p1=new _Point2.default();this.p2=new _Point2.default();this.segments=segments;this.iterationLimit=iterationLimit;}/**
   * Draws a catenary given two coordinates, a length and a context.
   * 
   * @param {CanvasRenderingContext2D} context The canvas context to draw the catenary on to.
   * @param {Point} p1 First point
   * @param {Point} p2 Second point
   * @param {Number} chainLength The length of the catenary
   */_createClass(Catenary,[{key:'drawToCanvas',value:function drawToCanvas(context,point1,point2,chainLength){this.p1.update(point1);this.p2.update(point2);var isFlipped=this.p1.x>this.p2.x;var p1=isFlipped?this.p2:this.p1;var p2=isFlipped?this.p1:this.p2;var distance=p1.getDistanceTo(p2);var curveData=[];var isStraight=true;// Prevent "expensive" catenary calculations if it would only result
// in a straight line.
if(distance<chainLength){var diff=p2.x-p1.x;// If the distance on the x axis of both points is too small, don't
// calculate a catenary.
if(diff>0.01){var h=p2.x-p1.x;var v=p2.y-p1.y;var a=-this.getCatenaryParameter(h,v,chainLength,this.iterationLimit);var x=(a*Math.log((chainLength+v)/(chainLength-v))-h)*0.5;var y=a*Math.cosh(x/a);var offsetX=p1.x-x;var offsetY=p1.y-y;curveData=this.getCurve(a,p1,p2,offsetX,offsetY,this.segments);isStraight=false;}else{var mx=(p1.x+p2.x)*0.5;var my=(p1.y+p2.y+chainLength)*0.5;curveData=[[p1.x,p1.y],[mx,my],[p2.x,p2.y]];}}else{curveData=[[p1.x,p1.y],[p2.x,p2.y]];}if(isStraight){this.drawLine(curveData,context);}else{this.drawCurve(curveData,context);}return curveData;}/**
     * Determines catenary parameter.
     * 
     * @param {Number} h Horizontal distance of both points.
     * @param {Number} v Vertical distance of both points.
     * @param {Number} length The catenary length.
     * @param {Number} limit Maximum amount of iterations to find parameter.
     */},{key:'getCatenaryParameter',value:function getCatenaryParameter(h,v,length,limit){var m=Math.sqrt(length*length-v*v)/h;var x=Math.acosh(m)+1;var prevx=-1;var count=0;while(Math.abs(x-prevx)>EPSILON&&count<limit){prevx=x;x=x-(Math.sinh(x)-m*x)/(Math.cosh(x)-m);count++;}return h/(2*x);}/**
     * Calculate the catenary curve.
     * Increasing the segments value will produce a catenary closer
     * to reality, but will require more calcluations.
     * 
     * @param {Number} a The catenary parameter.
     * @param {Point} p1 First point
     * @param {Point} p2 Second point
     * @param {Number} offsetX The calculated offset on the x axis.
     * @param {Number} offsetY The calculated offset on the y axis.
     * @param {Number} segments How many "parts" the chain should be made of.
     */},{key:'getCurve',value:function getCurve(a,p1,p2,offsetX,offsetY,segments){var data=[p1.x,a*Math.cosh((p1.x-offsetX)/a)+offsetY];var d=p2.x-p1.x;var length=segments-1;for(var i=0;i<length;i++){var x=p1.x+d*(i+0.5)/length;var y=a*Math.cosh((x-offsetX)/a)+offsetY;data.push(x,y);}data.push(p2.x,a*Math.cosh((p2.x-offsetX)/a)+offsetY);return data;}/**
     * Draws a straight line between two points.
     *
     * @param {Array} data Even indices are x, odd are y.
     * @param {CanvasRenderingContext2D} context The context to draw to.
     */},{key:'drawLine',value:function drawLine(data,context){context.moveTo(data[0][0],data[0][1]);context.lineTo(data[1][0],data[1][1]);}/**
     * Draws a quadratic curve between every calculated catenary segment,
     * so that the segments don't look like straight lines.
     *
     * @param {Array} data Even indices are x, odd are y.
     * @param {CanvasRenderingContext2D} context The context to draw to.
     * 
     * @returns {Array} The original segment coordinates.
     */},{key:'drawCurve',value:function drawCurve(data,context){var length=data.length*0.5-1;var ox=data[2];var oy=data[3];var temp=[];context.moveTo(data[0],data[1]);for(var i=2;i<length;i++){var x=data[i*2];var y=data[i*2+1];var mx=(x+ox)*0.5;var my=(y+oy)*0.5;temp.push([ox,oy,mx,my]);context.quadraticCurveTo(ox,oy,mx,my);ox=x;oy=y;}length=data.length;context.quadraticCurveTo(data[length-4],data[length-3],data[length-2],data[length-1]);return temp;}}]);return Catenary;}();exports.default=Catenary;

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */var MapShim=function(){if(typeof Map!=='undefined'){return Map;}/**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */function getIndex(arr,key){var result=-1;arr.some(function(entry,index){if(entry[0]===key){result=index;return true;}return false;});return result;}return(/** @class */function(){function class_1(){this.__entries__=[];}Object.defineProperty(class_1.prototype,"size",{/**
             * @returns {boolean}
             */get:function get(){return this.__entries__.length;},enumerable:true,configurable:true});/**
         * @param {*} key
         * @returns {*}
         */class_1.prototype.get=function(key){var index=getIndex(this.__entries__,key);var entry=this.__entries__[index];return entry&&entry[1];};/**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */class_1.prototype.set=function(key,value){var index=getIndex(this.__entries__,key);if(~index){this.__entries__[index][1]=value;}else{this.__entries__.push([key,value]);}};/**
         * @param {*} key
         * @returns {void}
         */class_1.prototype.delete=function(key){var entries=this.__entries__;var index=getIndex(entries,key);if(~index){entries.splice(index,1);}};/**
         * @param {*} key
         * @returns {void}
         */class_1.prototype.has=function(key){return!!~getIndex(this.__entries__,key);};/**
         * @returns {void}
         */class_1.prototype.clear=function(){this.__entries__.splice(0);};/**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */class_1.prototype.forEach=function(callback,ctx){if(ctx===void 0){ctx=null;}for(var _i=0,_a=this.__entries__;_i<_a.length;_i++){var entry=_a[_i];callback.call(ctx,entry[1],entry[0]);}};return class_1;}());}();/**
 * Detects whether window and document objects are available in current environment.
 */var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined'&&window.document===document;// Returns global object of a current environment.
var global$1=function(){if(typeof global!=='undefined'&&global.Math===Math){return global;}if(typeof self!=='undefined'&&self.Math===Math){return self;}if(typeof window!=='undefined'&&window.Math===Math){return window;}// eslint-disable-next-line no-new-func
return Function('return this')();}();/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */var requestAnimationFrame$1=function(){if(typeof requestAnimationFrame==='function'){// It's required to use a bounded function because IE sometimes throws
// an "Invalid calling object" error if rAF is invoked without the global
// object on the left hand side.
return requestAnimationFrame.bind(global$1);}return function(callback){return setTimeout(function(){return callback(Date.now());},1000/60);};}();// Defines minimum timeout before adding a trailing call.
var trailingTimeout=2;/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */function throttle(callback,delay){var leadingCall=false,trailingCall=false,lastCallTime=0;/**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */function resolvePending(){if(leadingCall){leadingCall=false;callback();}if(trailingCall){proxy();}}/**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */function timeoutCallback(){requestAnimationFrame$1(resolvePending);}/**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */function proxy(){var timeStamp=Date.now();if(leadingCall){// Reject immediately following calls.
if(timeStamp-lastCallTime<trailingTimeout){return;}// Schedule new call to be in invoked when the pending one is resolved.
// This is important for "transitions" which never actually start
// immediately so there is a chance that we might miss one if change
// happens amids the pending invocation.
trailingCall=true;}else{leadingCall=true;trailingCall=false;setTimeout(timeoutCallback,delay);}lastCallTime=timeStamp;}return proxy;}// Minimum delay before invoking the update of observers.
var REFRESH_DELAY=20;// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys=['top','right','bottom','left','width','height','size','weight'];// Check if MutationObserver is available.
var mutationObserverSupported=typeof MutationObserver!=='undefined';/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */var ResizeObserverController=/** @class */function(){/**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */function ResizeObserverController(){/**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */this.connected_=false;/**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */this.mutationEventsAdded_=false;/**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */this.mutationsObserver_=null;/**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=throttle(this.refresh.bind(this),REFRESH_DELAY);}/**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ResizeObserverController.prototype.addObserver=function(observer){if(!~this.observers_.indexOf(observer)){this.observers_.push(observer);}// Add listeners if they haven't been added yet.
if(!this.connected_){this.connect_();}};/**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ResizeObserverController.prototype.removeObserver=function(observer){var observers=this.observers_;var index=observers.indexOf(observer);// Remove observer if it's present in registry.
if(~index){observers.splice(index,1);}// Remove listeners if controller has no connected observers.
if(!observers.length&&this.connected_){this.disconnect_();}};/**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ResizeObserverController.prototype.refresh=function(){var changesDetected=this.updateObservers_();// Continue running updates if changes have been detected as there might
// be future ones caused by CSS transitions.
if(changesDetected){this.refresh();}};/**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ResizeObserverController.prototype.updateObservers_=function(){// Collect observers that have active observations.
var activeObservers=this.observers_.filter(function(observer){return observer.gatherActive(),observer.hasActive();});// Deliver notifications in a separate cycle in order to avoid any
// collisions between observers, e.g. when multiple instances of
// ResizeObserver are tracking the same element and the callback of one
// of them changes content dimensions of the observed target. Sometimes
// this may result in notifications being blocked for the rest of observers.
activeObservers.forEach(function(observer){return observer.broadcastActive();});return activeObservers.length>0;};/**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ResizeObserverController.prototype.connect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already added.
if(!isBrowser||this.connected_){return;}// Subscription to the "Transitionend" event is used as a workaround for
// delayed transitions. This way it's possible to capture at least the
// final state of an element.
document.addEventListener('transitionend',this.onTransitionEnd_);window.addEventListener('resize',this.refresh);if(mutationObserverSupported){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true});}else{document.addEventListener('DOMSubtreeModified',this.refresh);this.mutationEventsAdded_=true;}this.connected_=true;};/**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ResizeObserverController.prototype.disconnect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already removed.
if(!isBrowser||!this.connected_){return;}document.removeEventListener('transitionend',this.onTransitionEnd_);window.removeEventListener('resize',this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect();}if(this.mutationEventsAdded_){document.removeEventListener('DOMSubtreeModified',this.refresh);}this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false;};/**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ResizeObserverController.prototype.onTransitionEnd_=function(_a){var _b=_a.propertyName,propertyName=_b===void 0?'':_b;// Detect whether transition may affect dimensions of an element.
var isReflowProperty=transitionKeys.some(function(key){return!!~propertyName.indexOf(key);});if(isReflowProperty){this.refresh();}};/**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ResizeObserverController.getInstance=function(){if(!this.instance_){this.instance_=new ResizeObserverController();}return this.instance_;};/**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ResizeObserverController.instance_=null;return ResizeObserverController;}();/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */var defineConfigurable=function defineConfigurable(target,props){for(var _i=0,_a=Object.keys(props);_i<_a.length;_i++){var key=_a[_i];Object.defineProperty(target,key,{value:props[key],enumerable:false,writable:false,configurable:true});}return target;};/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */var getWindowOf=function getWindowOf(target){// Assume that the element is an instance of Node, which means that it
// has the "ownerDocument" property from which we can retrieve a
// corresponding global object.
var ownerGlobal=target&&target.ownerDocument&&target.ownerDocument.defaultView;// Return the local global object if it's not possible extract one from
// provided element.
return ownerGlobal||global$1;};// Placeholder of an empty content rectangle.
var emptyRect=createRectInit(0,0,0,0);/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */function toFloat(value){return parseFloat(value)||0;}/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */function getBordersSize(styles){var positions=[];for(var _i=1;_i<arguments.length;_i++){positions[_i-1]=arguments[_i];}return positions.reduce(function(size,position){var value=styles['border-'+position+'-width'];return size+toFloat(value);},0);}/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */function getPaddings(styles){var positions=['top','right','bottom','left'];var paddings={};for(var _i=0,positions_1=positions;_i<positions_1.length;_i++){var position=positions_1[_i];var value=styles['padding-'+position];paddings[position]=toFloat(value);}return paddings;}/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */function getSVGContentRect(target){var bbox=target.getBBox();return createRectInit(0,0,bbox.width,bbox.height);}/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */function getHTMLElementContentRect(target){// Client width & height properties can't be
// used exclusively as they provide rounded values.
var clientWidth=target.clientWidth,clientHeight=target.clientHeight;// By this condition we can catch all non-replaced inline, hidden and
// detached elements. Though elements with width & height properties less
// than 0.5 will be discarded as well.
//
// Without it we would need to implement separate methods for each of
// those cases and it's not possible to perform a precise and performance
// effective test for hidden elements. E.g. even jQuery's ':visible' filter
// gives wrong results for elements with width & height less than 0.5.
if(!clientWidth&&!clientHeight){return emptyRect;}var styles=getWindowOf(target).getComputedStyle(target);var paddings=getPaddings(styles);var horizPad=paddings.left+paddings.right;var vertPad=paddings.top+paddings.bottom;// Computed styles of width & height are being used because they are the
// only dimensions available to JS that contain non-rounded values. It could
// be possible to utilize the getBoundingClientRect if only it's data wasn't
// affected by CSS transformations let alone paddings, borders and scroll bars.
var width=toFloat(styles.width),height=toFloat(styles.height);// Width & height include paddings and borders when the 'border-box' box
// model is applied (except for IE).
if(styles.boxSizing==='border-box'){// Following conditions are required to handle Internet Explorer which
// doesn't include paddings and borders to computed CSS dimensions.
//
// We can say that if CSS dimensions + paddings are equal to the "client"
// properties then it's either IE, and thus we don't need to subtract
// anything, or an element merely doesn't have paddings/borders styles.
if(Math.round(width+horizPad)!==clientWidth){width-=getBordersSize(styles,'left','right')+horizPad;}if(Math.round(height+vertPad)!==clientHeight){height-=getBordersSize(styles,'top','bottom')+vertPad;}}// Following steps can't be applied to the document's root element as its
// client[Width/Height] properties represent viewport area of the window.
// Besides, it's as well not necessary as the <html> itself neither has
// rendered scroll bars nor it can be clipped.
if(!isDocumentElement(target)){// In some browsers (only in Firefox, actually) CSS width & height
// include scroll bars size which can be removed at this step as scroll
// bars are the only difference between rounded dimensions + paddings
// and "client" properties, though that is not always true in Chrome.
var vertScrollbar=Math.round(width+horizPad)-clientWidth;var horizScrollbar=Math.round(height+vertPad)-clientHeight;// Chrome has a rather weird rounding of "client" properties.
// E.g. for an element with content width of 314.2px it sometimes gives
// the client width of 315px and for the width of 314.7px it may give
// 314px. And it doesn't happen all the time. So just ignore this delta
// as a non-relevant.
if(Math.abs(vertScrollbar)!==1){width-=vertScrollbar;}if(Math.abs(horizScrollbar)!==1){height-=horizScrollbar;}}return createRectInit(paddings.left,paddings.top,width,height);}/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */var isSVGGraphicsElement=function(){// Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
// interface.
if(typeof SVGGraphicsElement!=='undefined'){return function(target){return target instanceof getWindowOf(target).SVGGraphicsElement;};}// If it's so, then check that element is at least an instance of the
// SVGElement and that it has the "getBBox" method.
// eslint-disable-next-line no-extra-parens
return function(target){return target instanceof getWindowOf(target).SVGElement&&typeof target.getBBox==='function';};}();/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */function isDocumentElement(target){return target===getWindowOf(target).document.documentElement;}/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */function getContentRect(target){if(!isBrowser){return emptyRect;}if(isSVGGraphicsElement(target)){return getSVGContentRect(target);}return getHTMLElementContentRect(target);}/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */function createReadOnlyRect(_a){var x=_a.x,y=_a.y,width=_a.width,height=_a.height;// If DOMRectReadOnly is available use it as a prototype for the rectangle.
var Constr=typeof DOMRectReadOnly!=='undefined'?DOMRectReadOnly:Object;var rect=Object.create(Constr.prototype);// Rectangle's properties are not writable and non-enumerable.
defineConfigurable(rect,{x:x,y:y,width:width,height:height,top:y,right:x+width,bottom:height+y,left:x});return rect;}/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */function createRectInit(x,y,width,height){return{x:x,y:y,width:width,height:height};}/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */var ResizeObservation=/** @class */function(){/**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */function ResizeObservation(target){/**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */this.broadcastWidth=0;/**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */this.broadcastHeight=0;/**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */this.contentRect_=createRectInit(0,0,0,0);this.target=target;}/**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ResizeObservation.prototype.isActive=function(){var rect=getContentRect(this.target);this.contentRect_=rect;return rect.width!==this.broadcastWidth||rect.height!==this.broadcastHeight;};/**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ResizeObservation.prototype.broadcastRect=function(){var rect=this.contentRect_;this.broadcastWidth=rect.width;this.broadcastHeight=rect.height;return rect;};return ResizeObservation;}();var ResizeObserverEntry=/** @class */function(){/**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */function ResizeObserverEntry(target,rectInit){var contentRect=createReadOnlyRect(rectInit);// According to the specification following properties are not writable
// and are also not enumerable in the native implementation.
//
// Property accessors are not being used as they'd require to define a
// private WeakMap storage which may cause memory leaks in browsers that
// don't support this type of collections.
defineConfigurable(this,{target:target,contentRect:contentRect});}return ResizeObserverEntry;}();var ResizeObserverSPI=/** @class */function(){/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */function ResizeObserverSPI(callback,controller,callbackCtx){/**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */this.activeObservations_=[];/**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */this.observations_=new MapShim();if(typeof callback!=='function'){throw new TypeError('The callback provided as parameter 1 is not a function.');}this.callback_=callback;this.controller_=controller;this.callbackCtx_=callbackCtx;}/**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ResizeObserverSPI.prototype.observe=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}// Do nothing if current environment doesn't have the Element interface.
if(typeof Element==='undefined'||!(Element instanceof Object)){return;}if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');}var observations=this.observations_;// Do nothing if element is already being observed.
if(observations.has(target)){return;}observations.set(target,new ResizeObservation(target));this.controller_.addObserver(this);// Force the update of observations.
this.controller_.refresh();};/**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ResizeObserverSPI.prototype.unobserve=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}// Do nothing if current environment doesn't have the Element interface.
if(typeof Element==='undefined'||!(Element instanceof Object)){return;}if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');}var observations=this.observations_;// Do nothing if element is not being observed.
if(!observations.has(target)){return;}observations.delete(target);if(!observations.size){this.controller_.removeObserver(this);}};/**
     * Stops observing all elements.
     *
     * @returns {void}
     */ResizeObserverSPI.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this);};/**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ResizeObserverSPI.prototype.gatherActive=function(){var _this=this;this.clearActive();this.observations_.forEach(function(observation){if(observation.isActive()){_this.activeObservations_.push(observation);}});};/**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ResizeObserverSPI.prototype.broadcastActive=function(){// Do nothing if observer doesn't have active observations.
if(!this.hasActive()){return;}var ctx=this.callbackCtx_;// Create ResizeObserverEntry instance for every active observation.
var entries=this.activeObservations_.map(function(observation){return new ResizeObserverEntry(observation.target,observation.broadcastRect());});this.callback_.call(ctx,entries,ctx);this.clearActive();};/**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0);};/**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0;};return ResizeObserverSPI;}();// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers=typeof WeakMap!=='undefined'?new WeakMap():new MapShim();/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */var ResizeObserver=/** @class */function(){/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */function ResizeObserver(callback){if(!(this instanceof ResizeObserver)){throw new TypeError('Cannot call a class as a function.');}if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}var controller=ResizeObserverController.getInstance();var observer=new ResizeObserverSPI(callback,controller,this);observers.set(this,observer);}return ResizeObserver;}();// Expose public methods of ResizeObserver.
['observe','unobserve','disconnect'].forEach(function(method){ResizeObserver.prototype[method]=function(){var _a;return(_a=observers.get(this))[method].apply(_a,arguments);};});var index=function(){// Export existing implementation if available.
if(typeof global$1.ResizeObserver!=='undefined'){return global$1.ResizeObserver;}return ResizeObserver;}();/* harmony default export */ __webpack_exports__["a"] = (index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(94)))

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _buildMatchMemberExpression=_interopRequireDefault(__webpack_require__(392));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var isReactComponent=(0,_buildMatchMemberExpression.default)("React.Component");var _default=isReactComponent;exports.default=_default;

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isCompatTag;function isCompatTag(tagName){return!!tagName&&/^[a-z]/.test(tagName);}

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=buildChildren;var _generated=__webpack_require__(340);var _cleanJSXElementLiteralChild=_interopRequireDefault(__webpack_require__(472));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function buildChildren(node){var elements=[];for(var i=0;i<node.children.length;i++){var child=node.children[i];if((0,_generated.isJSXText)(child)){(0,_cleanJSXElementLiteralChild.default)(child,elements);continue;}if((0,_generated.isJSXExpressionContainer)(child))child=child.expression;if((0,_generated.isJSXEmptyExpression)(child))continue;elements.push(child);}return elements;}

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=cleanJSXElementLiteralChild;var _generated=__webpack_require__(343);function cleanJSXElementLiteralChild(child,args){var lines=child.value.split(/\r\n|\n|\r/);var lastNonEmptyLine=0;for(var i=0;i<lines.length;i++){if(lines[i].match(/[^ \t]/)){lastNonEmptyLine=i;}}var str="";for(var _i=0;_i<lines.length;_i++){var line=lines[_i];var isFirstLine=_i===0;var isLastLine=_i===lines.length-1;var isLastNonEmptyLine=_i===lastNonEmptyLine;var trimmedLine=line.replace(/\t/g," ");if(!isFirstLine){trimmedLine=trimmedLine.replace(/^[ ]+/,"");}if(!isLastLine){trimmedLine=trimmedLine.replace(/[ ]+$/,"");}if(trimmedLine){if(!isLastNonEmptyLine){trimmedLine+=" ";}str+=trimmedLine;}}if(str)args.push((0,_generated.stringLiteral)(str));}

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=builder;function _clone(){var data=_interopRequireDefault(__webpack_require__(474));_clone=function _clone(){return data;};return data;}var _definitions=__webpack_require__(341);var _validate=_interopRequireDefault(__webpack_require__(415));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function builder(type){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var keys=_definitions.BUILDER_KEYS[type];var countArgs=args.length;if(countArgs>keys.length){throw new Error("".concat(type,": Too many arguments passed. Received ").concat(countArgs," but can receive no more than ").concat(keys.length));}var node={type:type};var i=0;keys.forEach(function(key){var field=_definitions.NODE_FIELDS[type][key];var arg;if(i<countArgs)arg=args[i];if(arg===undefined)arg=(0,_clone().default)(field.default);node[key]=arg;i++;});for(var _i=0,_Object$keys=Object.keys(node);_i<_Object$keys.length;_i++){var key=_Object$keys[_i];(0,_validate.default)(node,key,node[key]);}return node;}

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone=__webpack_require__(475);/** Used to compose bitmasks for cloning. */var CLONE_SYMBOLS_FLAG=4;/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}module.exports=clone;

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var Stack=__webpack_require__(476),arrayEach=__webpack_require__(505),assignValue=__webpack_require__(399),baseAssign=__webpack_require__(507),baseAssignIn=__webpack_require__(517),cloneBuffer=__webpack_require__(520),copyArray=__webpack_require__(521),copySymbols=__webpack_require__(522),copySymbolsIn=__webpack_require__(524),getAllKeys=__webpack_require__(525),getAllKeysIn=__webpack_require__(526),getTag=__webpack_require__(376),initCloneArray=__webpack_require__(530),initCloneByTag=__webpack_require__(531),initCloneObject=__webpack_require__(537),isArray=__webpack_require__(372),isBuffer=__webpack_require__(402),isMap=__webpack_require__(539),isObject=__webpack_require__(353),isSet=__webpack_require__(541),keys=__webpack_require__(371);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});return result;}if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}module.exports=baseClone;

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache=__webpack_require__(357),stackClear=__webpack_require__(482),stackDelete=__webpack_require__(483),stackGet=__webpack_require__(484),stackHas=__webpack_require__(485),stackSet=__webpack_require__(486);/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;

/***/ }),
/* 477 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf=__webpack_require__(358);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf=__webpack_require__(358);/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf=__webpack_require__(358);/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf=__webpack_require__(358);/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache=__webpack_require__(357);/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;

/***/ }),
/* 483 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;

/***/ }),
/* 484 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;

/***/ }),
/* 485 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache=__webpack_require__(357),Map=__webpack_require__(369),MapCache=__webpack_require__(398);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction=__webpack_require__(395),isMasked=__webpack_require__(490),isObject=__webpack_require__(353),toSource=__webpack_require__(397);/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(370);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;

/***/ }),
/* 489 */
/***/ (function(module, exports) {

/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData=__webpack_require__(491);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(345);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;

/***/ }),
/* 492 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

var Hash=__webpack_require__(494),ListCache=__webpack_require__(357),Map=__webpack_require__(369);/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear=__webpack_require__(495),hashDelete=__webpack_require__(496),hashGet=__webpack_require__(497),hashHas=__webpack_require__(498),hashSet=__webpack_require__(499);/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate=__webpack_require__(359);/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;

/***/ }),
/* 496 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate=__webpack_require__(359);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate=__webpack_require__(359);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate=__webpack_require__(359);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData=__webpack_require__(360);/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;

/***/ }),
/* 501 */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData=__webpack_require__(360);/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData=__webpack_require__(360);/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData=__webpack_require__(360);/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;

/***/ }),
/* 505 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}module.exports=arrayEach;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348);var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();module.exports=defineProperty;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject=__webpack_require__(361),keys=__webpack_require__(371);/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;

/***/ }),
/* 508 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments=__webpack_require__(510),isObjectLike=__webpack_require__(349);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(351),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;

/***/ }),
/* 511 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;

/***/ }),
/* 512 */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=_typeof(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray=__webpack_require__(514),baseUnary=__webpack_require__(362),nodeUtil=__webpack_require__(363);/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(351),isLength=__webpack_require__(403),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype=__webpack_require__(373),nativeKeys=__webpack_require__(516);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

var overArg=__webpack_require__(404);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject=__webpack_require__(361),keysIn=__webpack_require__(406);/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}module.exports=baseAssignIn;

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(353),isPrototype=__webpack_require__(373),nativeKeysIn=__webpack_require__(519);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=baseKeysIn;

/***/ }),
/* 519 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}module.exports=nativeKeysIn;

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var root=__webpack_require__(345);/** Detect free variable `exports`. */var freeExports=( false?undefined:_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?undefined:_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}module.exports=cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(132)(module)))

/***/ }),
/* 521 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}module.exports=copyArray;

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject=__webpack_require__(361),getSymbols=__webpack_require__(374);/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}module.exports=copySymbols;

/***/ }),
/* 523 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject=__webpack_require__(361),getSymbolsIn=__webpack_require__(408);/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}module.exports=copySymbolsIn;

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys=__webpack_require__(410),getSymbols=__webpack_require__(374),keys=__webpack_require__(371);/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys=__webpack_require__(410),getSymbolsIn=__webpack_require__(408),keysIn=__webpack_require__(406);/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}module.exports=getAllKeysIn;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348),root=__webpack_require__(345);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348),root=__webpack_require__(345);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(348),root=__webpack_require__(345);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;

/***/ }),
/* 530 */
/***/ (function(module, exports) {

/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}module.exports=initCloneArray;

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer=__webpack_require__(377),cloneDataView=__webpack_require__(533),cloneRegExp=__webpack_require__(534),cloneSymbol=__webpack_require__(535),cloneTypedArray=__webpack_require__(536);/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}module.exports=initCloneByTag;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(345);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer=__webpack_require__(377);/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}module.exports=cloneDataView;

/***/ }),
/* 534 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}module.exports=cloneRegExp;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(370);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}module.exports=cloneSymbol;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer=__webpack_require__(377);/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}module.exports=cloneTypedArray;

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate=__webpack_require__(538),getPrototype=__webpack_require__(375),isPrototype=__webpack_require__(373);/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}module.exports=initCloneObject;

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(353);/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();module.exports=baseCreate;

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap=__webpack_require__(540),baseUnary=__webpack_require__(362),nodeUtil=__webpack_require__(363);/* Node.js helper references. */var nodeIsMap=nodeUtil&&nodeUtil.isMap;/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;module.exports=isMap;

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

var getTag=__webpack_require__(376),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var mapTag='[object Map]';/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}module.exports=baseIsMap;

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet=__webpack_require__(542),baseUnary=__webpack_require__(362),nodeUtil=__webpack_require__(363);/* Node.js helper references. */var nodeIsSet=nodeUtil&&nodeUtil.isSet;/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;module.exports=isSet;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

var getTag=__webpack_require__(376),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var setTag='[object Set]';/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}module.exports=baseIsSet;

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var fastProto=null;// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(o){// A prototype object will have "fast properties" enabled once it is checked
// against the inline property cache of a function, e.g. fastProto.property:
// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
if(fastProto!==null&&_typeof(fastProto.property)){var result=fastProto;fastProto=FastObject.prototype=null;return result;}fastProto=FastObject.prototype=o==null?Object.create(null):o;return new FastObject();}// Initialize the inline property cache of FastObject
FastObject();module.exports=function toFastproperties(o){return FastObject(o);};

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/(function(){'use strict';exports.ast=__webpack_require__(545);exports.code=__webpack_require__(412);exports.keyword=__webpack_require__(546);})();/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 545 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/(function(){'use strict';function isExpression(node){if(node==null){return false;}switch(node.type){case'ArrayExpression':case'AssignmentExpression':case'BinaryExpression':case'CallExpression':case'ConditionalExpression':case'FunctionExpression':case'Identifier':case'Literal':case'LogicalExpression':case'MemberExpression':case'NewExpression':case'ObjectExpression':case'SequenceExpression':case'ThisExpression':case'UnaryExpression':case'UpdateExpression':return true;}return false;}function isIterationStatement(node){if(node==null){return false;}switch(node.type){case'DoWhileStatement':case'ForInStatement':case'ForStatement':case'WhileStatement':return true;}return false;}function isStatement(node){if(node==null){return false;}switch(node.type){case'BlockStatement':case'BreakStatement':case'ContinueStatement':case'DebuggerStatement':case'DoWhileStatement':case'EmptyStatement':case'ExpressionStatement':case'ForInStatement':case'ForStatement':case'IfStatement':case'LabeledStatement':case'ReturnStatement':case'SwitchStatement':case'ThrowStatement':case'TryStatement':case'VariableDeclaration':case'WhileStatement':case'WithStatement':return true;}return false;}function isSourceElement(node){return isStatement(node)||node!=null&&node.type==='FunctionDeclaration';}function trailingStatement(node){switch(node.type){case'IfStatement':if(node.alternate!=null){return node.alternate;}return node.consequent;case'LabeledStatement':case'ForStatement':case'ForInStatement':case'WhileStatement':case'WithStatement':return node.body;}return null;}function isProblematicIfStatement(node){var current;if(node.type!=='IfStatement'){return false;}if(node.alternate==null){return false;}current=node.consequent;do{if(current.type==='IfStatement'){if(current.alternate==null){return true;}}current=trailingStatement(current);}while(current);return false;}module.exports={isExpression:isExpression,isStatement:isStatement,isIterationStatement:isIterationStatement,isSourceElement:isSourceElement,isProblematicIfStatement:isProblematicIfStatement,trailingStatement:trailingStatement};})();/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/(function(){'use strict';var code=__webpack_require__(412);function isStrictModeReservedWordES6(id){switch(id){case'implements':case'interface':case'package':case'private':case'protected':case'public':case'static':case'let':return true;default:return false;}}function isKeywordES5(id,strict){// yield should not be treated as keyword under non-strict mode.
if(!strict&&id==='yield'){return false;}return isKeywordES6(id,strict);}function isKeywordES6(id,strict){if(strict&&isStrictModeReservedWordES6(id)){return true;}switch(id.length){case 2:return id==='if'||id==='in'||id==='do';case 3:return id==='var'||id==='for'||id==='new'||id==='try';case 4:return id==='this'||id==='else'||id==='case'||id==='void'||id==='with'||id==='enum';case 5:return id==='while'||id==='break'||id==='catch'||id==='throw'||id==='const'||id==='yield'||id==='class'||id==='super';case 6:return id==='return'||id==='typeof'||id==='delete'||id==='switch'||id==='export'||id==='import';case 7:return id==='default'||id==='finally'||id==='extends';case 8:return id==='function'||id==='continue'||id==='debugger';case 10:return id==='instanceof';default:return false;}}function isReservedWordES5(id,strict){return id==='null'||id==='true'||id==='false'||isKeywordES5(id,strict);}function isReservedWordES6(id,strict){return id==='null'||id==='true'||id==='false'||isKeywordES6(id,strict);}function isRestrictedWord(id){return id==='eval'||id==='arguments';}function isIdentifierNameES5(id){var i,iz,ch;if(id.length===0){return false;}ch=id.charCodeAt(0);if(!code.isIdentifierStartES5(ch)){return false;}for(i=1,iz=id.length;i<iz;++i){ch=id.charCodeAt(i);if(!code.isIdentifierPartES5(ch)){return false;}}return true;}function decodeUtf16(lead,trail){return(lead-0xD800)*0x400+(trail-0xDC00)+0x10000;}function isIdentifierNameES6(id){var i,iz,ch,lowCh,check;if(id.length===0){return false;}check=code.isIdentifierStartES6;for(i=0,iz=id.length;i<iz;++i){ch=id.charCodeAt(i);if(0xD800<=ch&&ch<=0xDBFF){++i;if(i>=iz){return false;}lowCh=id.charCodeAt(i);if(!(0xDC00<=lowCh&&lowCh<=0xDFFF)){return false;}ch=decodeUtf16(ch,lowCh);}if(!check(ch)){return false;}check=code.isIdentifierPartES6;}return true;}function isIdentifierES5(id,strict){return isIdentifierNameES5(id)&&!isReservedWordES5(id,strict);}function isIdentifierES6(id,strict){return isIdentifierNameES6(id)&&!isReservedWordES6(id,strict);}module.exports={isKeywordES5:isKeywordES5,isKeywordES6:isKeywordES6,isReservedWordES5:isReservedWordES5,isReservedWordES6:isReservedWordES6,isRestrictedWord:isRestrictedWord,isIdentifierNameES5:isIdentifierNameES5,isIdentifierNameES6:isIdentifierNameES6,isIdentifierES5:isIdentifierES5,isIdentifierES6:isIdentifierES6};})();/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils=_interopRequireWildcard(__webpack_require__(347));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var defineInterfaceishType=function defineInterfaceishType(name){var typeParameterType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"TypeParameterDeclaration";(0,_utils.default)(name,{builder:["id","typeParameters","extends","body"],visitor:["id","typeParameters","extends","mixins","implements","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)(typeParameterType),extends:(0,_utils.validateOptional)((0,_utils.arrayOfType)("InterfaceExtends")),mixins:(0,_utils.validateOptional)((0,_utils.arrayOfType)("InterfaceExtends")),implements:(0,_utils.validateOptional)((0,_utils.arrayOfType)("ClassImplements")),body:(0,_utils.validateType)("ObjectTypeAnnotation")}});};(0,_utils.default)("AnyTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("ArrayTypeAnnotation",{visitor:["elementType"],aliases:["Flow","FlowType"],fields:{elementType:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("BooleanTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("BooleanLiteralTypeAnnotation",{builder:["value"],aliases:["Flow","FlowType"],fields:{value:(0,_utils.validate)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("NullLiteralTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("ClassImplements",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TypeParameterInstantiation")}});defineInterfaceishType("DeclareClass");(0,_utils.default)("DeclareFunction",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),predicate:(0,_utils.validateOptionalType)("DeclaredPredicate")}});defineInterfaceishType("DeclareInterface");(0,_utils.default)("DeclareModule",{builder:["id","body","kind"],visitor:["id","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)(["Identifier","StringLiteral"]),body:(0,_utils.validateType)("BlockStatement"),kind:(0,_utils.validateOptional)((0,_utils.assertOneOf)("CommonJS","ES"))}});(0,_utils.default)("DeclareModuleExports",{visitor:["typeAnnotation"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{typeAnnotation:(0,_utils.validateType)("TypeAnnotation")}});(0,_utils.default)("DeclareTypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TypeParameterDeclaration"),right:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("DeclareOpaqueType",{visitor:["id","typeParameters","supertype"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,_utils.validateOptionalType)("FlowType")}});(0,_utils.default)("DeclareVariable",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier")}});(0,_utils.default)("DeclareExportDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{declaration:(0,_utils.validateOptionalType)("Flow"),specifiers:(0,_utils.validateOptional)((0,_utils.arrayOfType)(["ExportSpecifier","ExportNamespaceSpecifier"])),source:(0,_utils.validateOptionalType)("StringLiteral"),default:(0,_utils.validateOptional)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("DeclareExportAllDeclaration",{visitor:["source"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{source:(0,_utils.validateType)("StringLiteral"),exportKind:(0,_utils.validateOptional)((0,_utils.assertOneOf)(["type","value"]))}});(0,_utils.default)("DeclaredPredicate",{visitor:["value"],aliases:["Flow","FlowPredicate"],fields:{value:(0,_utils.validateType)("Flow")}});(0,_utils.default)("ExistsTypeAnnotation",{aliases:["Flow","FlowType"]});(0,_utils.default)("FunctionTypeAnnotation",{visitor:["typeParameters","params","rest","returnType"],aliases:["Flow","FlowType"],fields:{typeParameters:(0,_utils.validateOptionalType)("TypeParameterDeclaration"),params:(0,_utils.validate)((0,_utils.arrayOfType)("FunctionTypeParam")),rest:(0,_utils.validateOptionalType)("FunctionTypeParam"),returnType:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("FunctionTypeParam",{visitor:["name","typeAnnotation"],aliases:["Flow"],fields:{name:(0,_utils.validateOptionalType)("Identifier"),typeAnnotation:(0,_utils.validateType)("FlowType"),optional:(0,_utils.validateOptional)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("GenericTypeAnnotation",{visitor:["id","typeParameters"],aliases:["Flow","FlowType"],fields:{id:(0,_utils.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,_utils.validateOptionalType)("TypeParameterInstantiation")}});(0,_utils.default)("InferredPredicate",{aliases:["Flow","FlowPredicate"]});(0,_utils.default)("InterfaceExtends",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{id:(0,_utils.validateType)(["Identifier","QualifiedTypeIdentifier"]),typeParameters:(0,_utils.validateOptionalType)("TypeParameterInstantiation")}});defineInterfaceishType("InterfaceDeclaration");(0,_utils.default)("InterfaceTypeAnnotation",{visitor:["extends","body"],aliases:["Flow","FlowType"],fields:{extends:(0,_utils.validateOptional)((0,_utils.arrayOfType)("InterfaceExtends")),body:(0,_utils.validateType)("ObjectTypeAnnotation")}});(0,_utils.default)("IntersectionTypeAnnotation",{visitor:["types"],aliases:["Flow","FlowType"],fields:{types:(0,_utils.validate)((0,_utils.arrayOfType)("FlowType"))}});(0,_utils.default)("MixedTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("EmptyTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("NullableTypeAnnotation",{visitor:["typeAnnotation"],aliases:["Flow","FlowType"],fields:{typeAnnotation:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("NumberLiteralTypeAnnotation",{builder:["value"],aliases:["Flow","FlowType"],fields:{value:(0,_utils.validate)((0,_utils.assertValueType)("number"))}});(0,_utils.default)("NumberTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("ObjectTypeAnnotation",{visitor:["properties","indexers","callProperties","internalSlots"],aliases:["Flow","FlowType"],builder:["properties","indexers","callProperties","internalSlots","exact"],fields:{properties:(0,_utils.validate)((0,_utils.arrayOfType)(["ObjectTypeProperty","ObjectTypeSpreadProperty"])),indexers:(0,_utils.validateOptional)((0,_utils.arrayOfType)("ObjectTypeIndexer")),callProperties:(0,_utils.validateOptional)((0,_utils.arrayOfType)("ObjectTypeCallProperty")),internalSlots:(0,_utils.validateOptional)((0,_utils.arrayOfType)("ObjectTypeInternalSlot")),exact:{validate:(0,_utils.assertValueType)("boolean"),default:false},inexact:(0,_utils.validateOptional)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("ObjectTypeInternalSlot",{visitor:["id","value","optional","static","method"],aliases:["Flow","UserWhitespacable"],fields:{id:(0,_utils.validateType)("Identifier"),value:(0,_utils.validateType)("FlowType"),optional:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),static:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),method:(0,_utils.validate)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("ObjectTypeCallProperty",{visitor:["value"],aliases:["Flow","UserWhitespacable"],fields:{value:(0,_utils.validateType)("FlowType"),static:(0,_utils.validate)((0,_utils.assertValueType)("boolean"))}});(0,_utils.default)("ObjectTypeIndexer",{visitor:["id","key","value","variance"],aliases:["Flow","UserWhitespacable"],fields:{id:(0,_utils.validateOptionalType)("Identifier"),key:(0,_utils.validateType)("FlowType"),value:(0,_utils.validateType)("FlowType"),static:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),variance:(0,_utils.validateOptionalType)("Variance")}});(0,_utils.default)("ObjectTypeProperty",{visitor:["key","value","variance"],aliases:["Flow","UserWhitespacable"],fields:{key:(0,_utils.validateType)(["Identifier","StringLiteral"]),value:(0,_utils.validateType)("FlowType"),kind:(0,_utils.validate)((0,_utils.assertOneOf)("init","get","set")),static:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),proto:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),optional:(0,_utils.validate)((0,_utils.assertValueType)("boolean")),variance:(0,_utils.validateOptionalType)("Variance")}});(0,_utils.default)("ObjectTypeSpreadProperty",{visitor:["argument"],aliases:["Flow","UserWhitespacable"],fields:{argument:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("OpaqueType",{visitor:["id","typeParameters","supertype","impltype"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TypeParameterDeclaration"),supertype:(0,_utils.validateOptionalType)("FlowType"),impltype:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("QualifiedTypeIdentifier",{visitor:["id","qualification"],aliases:["Flow"],fields:{id:(0,_utils.validateType)("Identifier"),qualification:(0,_utils.validateType)(["Identifier","QualifiedTypeIdentifier"])}});(0,_utils.default)("StringLiteralTypeAnnotation",{builder:["value"],aliases:["Flow","FlowType"],fields:{value:(0,_utils.validate)((0,_utils.assertValueType)("string"))}});(0,_utils.default)("StringTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("ThisTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});(0,_utils.default)("TupleTypeAnnotation",{visitor:["types"],aliases:["Flow","FlowType"],fields:{types:(0,_utils.validate)((0,_utils.arrayOfType)("FlowType"))}});(0,_utils.default)("TypeofTypeAnnotation",{visitor:["argument"],aliases:["Flow","FlowType"],fields:{argument:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("TypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TypeParameterDeclaration"),right:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("TypeAnnotation",{aliases:["Flow"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,_utils.validateType)("FlowType")}});(0,_utils.default)("TypeCastExpression",{visitor:["expression","typeAnnotation"],aliases:["Flow","ExpressionWrapper","Expression"],fields:{expression:(0,_utils.validateType)("Expression"),typeAnnotation:(0,_utils.validateType)("TypeAnnotation")}});(0,_utils.default)("TypeParameter",{aliases:["Flow"],visitor:["bound","default","variance"],fields:{name:(0,_utils.validate)((0,_utils.assertValueType)("string")),bound:(0,_utils.validateOptionalType)("TypeAnnotation"),default:(0,_utils.validateOptionalType)("FlowType"),variance:(0,_utils.validateOptionalType)("Variance")}});(0,_utils.default)("TypeParameterDeclaration",{aliases:["Flow"],visitor:["params"],fields:{params:(0,_utils.validate)((0,_utils.arrayOfType)("TypeParameter"))}});(0,_utils.default)("TypeParameterInstantiation",{aliases:["Flow"],visitor:["params"],fields:{params:(0,_utils.validate)((0,_utils.arrayOfType)("FlowType"))}});(0,_utils.default)("UnionTypeAnnotation",{visitor:["types"],aliases:["Flow","FlowType"],fields:{types:(0,_utils.validate)((0,_utils.arrayOfType)("FlowType"))}});(0,_utils.default)("Variance",{aliases:["Flow"],builder:["kind"],fields:{kind:(0,_utils.validate)((0,_utils.assertOneOf)("minus","plus"))}});(0,_utils.default)("VoidTypeAnnotation",{aliases:["Flow","FlowType","FlowBaseAnnotation"]});

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils=_interopRequireWildcard(__webpack_require__(347));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}(0,_utils.default)("JSXAttribute",{visitor:["name","value"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_utils.assertNodeType)("JSXIdentifier","JSXNamespacedName")},value:{optional:true,validate:(0,_utils.assertNodeType)("JSXElement","JSXFragment","StringLiteral","JSXExpressionContainer")}}});(0,_utils.default)("JSXClosingElement",{visitor:["name"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_utils.assertNodeType)("JSXIdentifier","JSXMemberExpression")}}});(0,_utils.default)("JSXElement",{builder:["openingElement","closingElement","children","selfClosing"],visitor:["openingElement","children","closingElement"],aliases:["JSX","Immutable","Expression"],fields:{openingElement:{validate:(0,_utils.assertNodeType)("JSXOpeningElement")},closingElement:{optional:true,validate:(0,_utils.assertNodeType)("JSXClosingElement")},children:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}}});(0,_utils.default)("JSXEmptyExpression",{aliases:["JSX"]});(0,_utils.default)("JSXExpressionContainer",{visitor:["expression"],aliases:["JSX","Immutable"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression","JSXEmptyExpression")}}});(0,_utils.default)("JSXSpreadChild",{visitor:["expression"],aliases:["JSX","Immutable"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("JSXIdentifier",{builder:["name"],aliases:["JSX"],fields:{name:{validate:(0,_utils.assertValueType)("string")}}});(0,_utils.default)("JSXMemberExpression",{visitor:["object","property"],aliases:["JSX"],fields:{object:{validate:(0,_utils.assertNodeType)("JSXMemberExpression","JSXIdentifier")},property:{validate:(0,_utils.assertNodeType)("JSXIdentifier")}}});(0,_utils.default)("JSXNamespacedName",{visitor:["namespace","name"],aliases:["JSX"],fields:{namespace:{validate:(0,_utils.assertNodeType)("JSXIdentifier")},name:{validate:(0,_utils.assertNodeType)("JSXIdentifier")}}});(0,_utils.default)("JSXOpeningElement",{builder:["name","attributes","selfClosing"],visitor:["name","attributes"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_utils.assertNodeType)("JSXIdentifier","JSXMemberExpression")},selfClosing:{default:false,validate:(0,_utils.assertValueType)("boolean")},attributes:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("JSXAttribute","JSXSpreadAttribute")))},typeParameters:{validate:(0,_utils.assertNodeType)("TypeParameterInstantiation","TSTypeParameterInstantiation"),optional:true}}});(0,_utils.default)("JSXSpreadAttribute",{visitor:["argument"],aliases:["JSX"],fields:{argument:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("JSXText",{aliases:["JSX","Immutable"],builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("string")}}});(0,_utils.default)("JSXFragment",{builder:["openingFragment","closingFragment","children"],visitor:["openingFragment","children","closingFragment"],aliases:["JSX","Immutable","Expression"],fields:{openingFragment:{validate:(0,_utils.assertNodeType)("JSXOpeningFragment")},closingFragment:{validate:(0,_utils.assertNodeType)("JSXClosingFragment")},children:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("JSXText","JSXExpressionContainer","JSXSpreadChild","JSXElement","JSXFragment")))}}});(0,_utils.default)("JSXOpeningFragment",{aliases:["JSX","Immutable"]});(0,_utils.default)("JSXClosingFragment",{aliases:["JSX","Immutable"]});

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var _utils=_interopRequireWildcard(__webpack_require__(347));var _placeholders=__webpack_require__(414);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}(0,_utils.default)("Noop",{visitor:[]});(0,_utils.default)("Placeholder",{visitor:[],builder:["expectedNode","name"],fields:{name:{validate:(0,_utils.assertNodeType)("Identifier")},expectedNode:{validate:(0,_utils.assertOneOf).apply(void 0,_toConsumableArray(_placeholders.PLACEHOLDERS))}}});

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils=_interopRequireWildcard(__webpack_require__(347));var _es=__webpack_require__(381);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}(0,_utils.default)("ArgumentPlaceholder",{});(0,_utils.default)("AwaitExpression",{builder:["argument"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{argument:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("BindExpression",{visitor:["object","callee"],aliases:["Expression"],fields:{}});(0,_utils.default)("ClassProperty",{visitor:["key","value","typeAnnotation","decorators"],builder:["key","value","typeAnnotation","decorators","computed"],aliases:["Property"],fields:Object.assign({},_es.classMethodOrPropertyCommon,{value:{validate:(0,_utils.assertNodeType)("Expression"),optional:true},definite:{validate:(0,_utils.assertValueType)("boolean"),optional:true},typeAnnotation:{validate:(0,_utils.assertNodeType)("TypeAnnotation","TSTypeAnnotation","Noop"),optional:true},decorators:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Decorator"))),optional:true},readonly:{validate:(0,_utils.assertValueType)("boolean"),optional:true}})});(0,_utils.default)("OptionalMemberExpression",{builder:["object","property","computed","optional"],visitor:["object","property"],aliases:["Expression"],fields:{object:{validate:(0,_utils.assertNodeType)("Expression")},property:{validate:function(){var normal=(0,_utils.assertNodeType)("Identifier");var computed=(0,_utils.assertNodeType)("Expression");return function(node,key,val){var validator=node.computed?computed:normal;validator(node,key,val);};}()},computed:{default:false},optional:{validate:(0,_utils.assertValueType)("boolean")}}});(0,_utils.default)("PipelineTopicExpression",{builder:["expression"],visitor:["expression"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("PipelineBareFunction",{builder:["callee"],visitor:["callee"],fields:{callee:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("PipelinePrimaryTopicReference",{aliases:["Expression"]});(0,_utils.default)("OptionalCallExpression",{visitor:["callee","arguments","typeParameters","typeArguments"],builder:["callee","arguments","optional"],aliases:["Expression"],fields:{callee:{validate:(0,_utils.assertNodeType)("Expression")},arguments:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("Expression","SpreadElement","JSXNamespacedName")))},optional:{validate:(0,_utils.assertValueType)("boolean")},typeArguments:{validate:(0,_utils.assertNodeType)("TypeParameterInstantiation"),optional:true},typeParameters:{validate:(0,_utils.assertNodeType)("TSTypeParameterInstantiation"),optional:true}}});(0,_utils.default)("ClassPrivateProperty",{visitor:["key","value"],builder:["key","value"],aliases:["Property","Private"],fields:{key:{validate:(0,_utils.assertNodeType)("PrivateName")},value:{validate:(0,_utils.assertNodeType)("Expression"),optional:true}}});(0,_utils.default)("ClassPrivateMethod",{builder:["kind","key","params","body","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["Function","Scopable","BlockParent","FunctionParent","Method","Private"],fields:Object.assign({},_es.classMethodOrDeclareMethodCommon,{key:{validate:(0,_utils.assertNodeType)("PrivateName")},body:{validate:(0,_utils.assertNodeType)("BlockStatement")}})});(0,_utils.default)("Import",{aliases:["Expression"]});(0,_utils.default)("Decorator",{visitor:["expression"],fields:{expression:{validate:(0,_utils.assertNodeType)("Expression")}}});(0,_utils.default)("DoExpression",{visitor:["body"],aliases:["Expression"],fields:{body:{validate:(0,_utils.assertNodeType)("BlockStatement")}}});(0,_utils.default)("ExportDefaultSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("ExportNamespaceSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("PrivateName",{visitor:["id"],aliases:["Private"],fields:{id:{validate:(0,_utils.assertNodeType)("Identifier")}}});(0,_utils.default)("BigIntLiteral",{builder:["value"],fields:{value:{validate:(0,_utils.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]});

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _utils=_interopRequireWildcard(__webpack_require__(347));var _core=__webpack_require__(378);var _es=__webpack_require__(381);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var bool=(0,_utils.assertValueType)("boolean");var tSFunctionTypeAnnotationCommon={returnType:{validate:(0,_utils.assertNodeType)("TSTypeAnnotation","Noop"),optional:true},typeParameters:{validate:(0,_utils.assertNodeType)("TSTypeParameterDeclaration","Noop"),optional:true}};(0,_utils.default)("TSParameterProperty",{aliases:["LVal"],visitor:["parameter"],fields:{accessibility:{validate:(0,_utils.assertOneOf)("public","private","protected"),optional:true},readonly:{validate:(0,_utils.assertValueType)("boolean"),optional:true},parameter:{validate:(0,_utils.assertNodeType)("Identifier","AssignmentPattern")}}});(0,_utils.default)("TSDeclareFunction",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","params","returnType"],fields:Object.assign({},_core.functionDeclarationCommon,tSFunctionTypeAnnotationCommon)});(0,_utils.default)("TSDeclareMethod",{visitor:["decorators","key","typeParameters","params","returnType"],fields:Object.assign({},_es.classMethodOrDeclareMethodCommon,tSFunctionTypeAnnotationCommon)});(0,_utils.default)("TSQualifiedName",{aliases:["TSEntityName"],visitor:["left","right"],fields:{left:(0,_utils.validateType)("TSEntityName"),right:(0,_utils.validateType)("Identifier")}});var signatureDeclarationCommon={typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterDeclaration"),parameters:(0,_utils.validateArrayOfType)(["Identifier","RestElement"]),typeAnnotation:(0,_utils.validateOptionalType)("TSTypeAnnotation")};var callConstructSignatureDeclaration={aliases:["TSTypeElement"],visitor:["typeParameters","parameters","typeAnnotation"],fields:signatureDeclarationCommon};(0,_utils.default)("TSCallSignatureDeclaration",callConstructSignatureDeclaration);(0,_utils.default)("TSConstructSignatureDeclaration",callConstructSignatureDeclaration);var namedTypeElementCommon={key:(0,_utils.validateType)("Expression"),computed:(0,_utils.validate)(bool),optional:(0,_utils.validateOptional)(bool)};(0,_utils.default)("TSPropertySignature",{aliases:["TSTypeElement"],visitor:["key","typeAnnotation","initializer"],fields:Object.assign({},namedTypeElementCommon,{readonly:(0,_utils.validateOptional)(bool),typeAnnotation:(0,_utils.validateOptionalType)("TSTypeAnnotation"),initializer:(0,_utils.validateOptionalType)("Expression")})});(0,_utils.default)("TSMethodSignature",{aliases:["TSTypeElement"],visitor:["key","typeParameters","parameters","typeAnnotation"],fields:Object.assign({},signatureDeclarationCommon,namedTypeElementCommon)});(0,_utils.default)("TSIndexSignature",{aliases:["TSTypeElement"],visitor:["parameters","typeAnnotation"],fields:{readonly:(0,_utils.validateOptional)(bool),parameters:(0,_utils.validateArrayOfType)("Identifier"),typeAnnotation:(0,_utils.validateOptionalType)("TSTypeAnnotation")}});var tsKeywordTypes=["TSAnyKeyword","TSUnknownKeyword","TSNumberKeyword","TSObjectKeyword","TSBooleanKeyword","TSStringKeyword","TSSymbolKeyword","TSVoidKeyword","TSUndefinedKeyword","TSNullKeyword","TSNeverKeyword"];for(var _i=0,_tsKeywordTypes=tsKeywordTypes;_i<_tsKeywordTypes.length;_i++){var type=_tsKeywordTypes[_i];(0,_utils.default)(type,{aliases:["TSType"],visitor:[],fields:{}});}(0,_utils.default)("TSThisType",{aliases:["TSType"],visitor:[],fields:{}});var fnOrCtr={aliases:["TSType"],visitor:["typeParameters","parameters","typeAnnotation"],fields:signatureDeclarationCommon};(0,_utils.default)("TSFunctionType",fnOrCtr);(0,_utils.default)("TSConstructorType",fnOrCtr);(0,_utils.default)("TSTypeReference",{aliases:["TSType"],visitor:["typeName","typeParameters"],fields:{typeName:(0,_utils.validateType)("TSEntityName"),typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterInstantiation")}});(0,_utils.default)("TSTypePredicate",{aliases:["TSType"],visitor:["parameterName","typeAnnotation"],fields:{parameterName:(0,_utils.validateType)(["Identifier","TSThisType"]),typeAnnotation:(0,_utils.validateType)("TSTypeAnnotation")}});(0,_utils.default)("TSTypeQuery",{aliases:["TSType"],visitor:["exprName"],fields:{exprName:(0,_utils.validateType)(["TSEntityName","TSImportType"])}});(0,_utils.default)("TSTypeLiteral",{aliases:["TSType"],visitor:["members"],fields:{members:(0,_utils.validateArrayOfType)("TSTypeElement")}});(0,_utils.default)("TSArrayType",{aliases:["TSType"],visitor:["elementType"],fields:{elementType:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSTupleType",{aliases:["TSType"],visitor:["elementTypes"],fields:{elementTypes:(0,_utils.validateArrayOfType)("TSType")}});(0,_utils.default)("TSOptionalType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSRestType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,_utils.validateType)("TSType")}});var unionOrIntersection={aliases:["TSType"],visitor:["types"],fields:{types:(0,_utils.validateArrayOfType)("TSType")}};(0,_utils.default)("TSUnionType",unionOrIntersection);(0,_utils.default)("TSIntersectionType",unionOrIntersection);(0,_utils.default)("TSConditionalType",{aliases:["TSType"],visitor:["checkType","extendsType","trueType","falseType"],fields:{checkType:(0,_utils.validateType)("TSType"),extendsType:(0,_utils.validateType)("TSType"),trueType:(0,_utils.validateType)("TSType"),falseType:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSInferType",{aliases:["TSType"],visitor:["typeParameter"],fields:{typeParameter:(0,_utils.validateType)("TSTypeParameter")}});(0,_utils.default)("TSParenthesizedType",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{typeAnnotation:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSTypeOperator",{aliases:["TSType"],visitor:["typeAnnotation"],fields:{operator:(0,_utils.validate)((0,_utils.assertValueType)("string")),typeAnnotation:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSIndexedAccessType",{aliases:["TSType"],visitor:["objectType","indexType"],fields:{objectType:(0,_utils.validateType)("TSType"),indexType:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSMappedType",{aliases:["TSType"],visitor:["typeParameter","typeAnnotation"],fields:{readonly:(0,_utils.validateOptional)(bool),typeParameter:(0,_utils.validateType)("TSTypeParameter"),optional:(0,_utils.validateOptional)(bool),typeAnnotation:(0,_utils.validateOptionalType)("TSType")}});(0,_utils.default)("TSLiteralType",{aliases:["TSType"],visitor:["literal"],fields:{literal:(0,_utils.validateType)(["NumericLiteral","StringLiteral","BooleanLiteral"])}});(0,_utils.default)("TSExpressionWithTypeArguments",{aliases:["TSType"],visitor:["expression","typeParameters"],fields:{expression:(0,_utils.validateType)("TSEntityName"),typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterInstantiation")}});(0,_utils.default)("TSInterfaceDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","extends","body"],fields:{declare:(0,_utils.validateOptional)(bool),id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterDeclaration"),extends:(0,_utils.validateOptional)((0,_utils.arrayOfType)("TSExpressionWithTypeArguments")),body:(0,_utils.validateType)("TSInterfaceBody")}});(0,_utils.default)("TSInterfaceBody",{visitor:["body"],fields:{body:(0,_utils.validateArrayOfType)("TSTypeElement")}});(0,_utils.default)("TSTypeAliasDeclaration",{aliases:["Statement","Declaration"],visitor:["id","typeParameters","typeAnnotation"],fields:{declare:(0,_utils.validateOptional)(bool),id:(0,_utils.validateType)("Identifier"),typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterDeclaration"),typeAnnotation:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSAsExpression",{aliases:["Expression"],visitor:["expression","typeAnnotation"],fields:{expression:(0,_utils.validateType)("Expression"),typeAnnotation:(0,_utils.validateType)("TSType")}});(0,_utils.default)("TSTypeAssertion",{aliases:["Expression"],visitor:["typeAnnotation","expression"],fields:{typeAnnotation:(0,_utils.validateType)("TSType"),expression:(0,_utils.validateType)("Expression")}});(0,_utils.default)("TSEnumDeclaration",{aliases:["Statement","Declaration"],visitor:["id","members"],fields:{declare:(0,_utils.validateOptional)(bool),const:(0,_utils.validateOptional)(bool),id:(0,_utils.validateType)("Identifier"),members:(0,_utils.validateArrayOfType)("TSEnumMember"),initializer:(0,_utils.validateOptionalType)("Expression")}});(0,_utils.default)("TSEnumMember",{visitor:["id","initializer"],fields:{id:(0,_utils.validateType)(["Identifier","StringLiteral"]),initializer:(0,_utils.validateOptionalType)("Expression")}});(0,_utils.default)("TSModuleDeclaration",{aliases:["Statement","Declaration"],visitor:["id","body"],fields:{declare:(0,_utils.validateOptional)(bool),global:(0,_utils.validateOptional)(bool),id:(0,_utils.validateType)(["Identifier","StringLiteral"]),body:(0,_utils.validateType)(["TSModuleBlock","TSModuleDeclaration"])}});(0,_utils.default)("TSModuleBlock",{visitor:["body"],fields:{body:(0,_utils.validateArrayOfType)("Statement")}});(0,_utils.default)("TSImportType",{aliases:["TSType"],visitor:["argument","qualifier","typeParameters"],fields:{argument:(0,_utils.validateType)("StringLiteral"),qualifier:(0,_utils.validateOptionalType)("TSEntityName"),typeParameters:(0,_utils.validateOptionalType)("TSTypeParameterInstantiation")}});(0,_utils.default)("TSImportEqualsDeclaration",{aliases:["Statement"],visitor:["id","moduleReference"],fields:{isExport:(0,_utils.validate)(bool),id:(0,_utils.validateType)("Identifier"),moduleReference:(0,_utils.validateType)(["TSEntityName","TSExternalModuleReference"])}});(0,_utils.default)("TSExternalModuleReference",{visitor:["expression"],fields:{expression:(0,_utils.validateType)("StringLiteral")}});(0,_utils.default)("TSNonNullExpression",{aliases:["Expression"],visitor:["expression"],fields:{expression:(0,_utils.validateType)("Expression")}});(0,_utils.default)("TSExportAssignment",{aliases:["Statement"],visitor:["expression"],fields:{expression:(0,_utils.validateType)("Expression")}});(0,_utils.default)("TSNamespaceExportDeclaration",{aliases:["Statement"],visitor:["id"],fields:{id:(0,_utils.validateType)("Identifier")}});(0,_utils.default)("TSTypeAnnotation",{visitor:["typeAnnotation"],fields:{typeAnnotation:{validate:(0,_utils.assertNodeType)("TSType")}}});(0,_utils.default)("TSTypeParameterInstantiation",{visitor:["params"],fields:{params:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("TSType")))}}});(0,_utils.default)("TSTypeParameterDeclaration",{visitor:["params"],fields:{params:{validate:(0,_utils.chain)((0,_utils.assertValueType)("array"),(0,_utils.assertEach)((0,_utils.assertNodeType)("TSTypeParameter")))}}});(0,_utils.default)("TSTypeParameter",{visitor:["constraint","default"],fields:{name:{validate:(0,_utils.assertValueType)("string")},constraint:{validate:(0,_utils.assertNodeType)("TSType"),optional:true},default:{validate:(0,_utils.assertNodeType)("TSType"),optional:true}}});

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=assertNode;var _isNode=_interopRequireDefault(__webpack_require__(416));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function assertNode(node){if(!(0,_isNode.default)(node)){var type=node&&node.type||JSON.stringify(node);throw new TypeError("Not a valid node of type \"".concat(type,"\""));}}

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.assertArrayExpression=assertArrayExpression;exports.assertAssignmentExpression=assertAssignmentExpression;exports.assertBinaryExpression=assertBinaryExpression;exports.assertInterpreterDirective=assertInterpreterDirective;exports.assertDirective=assertDirective;exports.assertDirectiveLiteral=assertDirectiveLiteral;exports.assertBlockStatement=assertBlockStatement;exports.assertBreakStatement=assertBreakStatement;exports.assertCallExpression=assertCallExpression;exports.assertCatchClause=assertCatchClause;exports.assertConditionalExpression=assertConditionalExpression;exports.assertContinueStatement=assertContinueStatement;exports.assertDebuggerStatement=assertDebuggerStatement;exports.assertDoWhileStatement=assertDoWhileStatement;exports.assertEmptyStatement=assertEmptyStatement;exports.assertExpressionStatement=assertExpressionStatement;exports.assertFile=assertFile;exports.assertForInStatement=assertForInStatement;exports.assertForStatement=assertForStatement;exports.assertFunctionDeclaration=assertFunctionDeclaration;exports.assertFunctionExpression=assertFunctionExpression;exports.assertIdentifier=assertIdentifier;exports.assertIfStatement=assertIfStatement;exports.assertLabeledStatement=assertLabeledStatement;exports.assertStringLiteral=assertStringLiteral;exports.assertNumericLiteral=assertNumericLiteral;exports.assertNullLiteral=assertNullLiteral;exports.assertBooleanLiteral=assertBooleanLiteral;exports.assertRegExpLiteral=assertRegExpLiteral;exports.assertLogicalExpression=assertLogicalExpression;exports.assertMemberExpression=assertMemberExpression;exports.assertNewExpression=assertNewExpression;exports.assertProgram=assertProgram;exports.assertObjectExpression=assertObjectExpression;exports.assertObjectMethod=assertObjectMethod;exports.assertObjectProperty=assertObjectProperty;exports.assertRestElement=assertRestElement;exports.assertReturnStatement=assertReturnStatement;exports.assertSequenceExpression=assertSequenceExpression;exports.assertParenthesizedExpression=assertParenthesizedExpression;exports.assertSwitchCase=assertSwitchCase;exports.assertSwitchStatement=assertSwitchStatement;exports.assertThisExpression=assertThisExpression;exports.assertThrowStatement=assertThrowStatement;exports.assertTryStatement=assertTryStatement;exports.assertUnaryExpression=assertUnaryExpression;exports.assertUpdateExpression=assertUpdateExpression;exports.assertVariableDeclaration=assertVariableDeclaration;exports.assertVariableDeclarator=assertVariableDeclarator;exports.assertWhileStatement=assertWhileStatement;exports.assertWithStatement=assertWithStatement;exports.assertAssignmentPattern=assertAssignmentPattern;exports.assertArrayPattern=assertArrayPattern;exports.assertArrowFunctionExpression=assertArrowFunctionExpression;exports.assertClassBody=assertClassBody;exports.assertClassDeclaration=assertClassDeclaration;exports.assertClassExpression=assertClassExpression;exports.assertExportAllDeclaration=assertExportAllDeclaration;exports.assertExportDefaultDeclaration=assertExportDefaultDeclaration;exports.assertExportNamedDeclaration=assertExportNamedDeclaration;exports.assertExportSpecifier=assertExportSpecifier;exports.assertForOfStatement=assertForOfStatement;exports.assertImportDeclaration=assertImportDeclaration;exports.assertImportDefaultSpecifier=assertImportDefaultSpecifier;exports.assertImportNamespaceSpecifier=assertImportNamespaceSpecifier;exports.assertImportSpecifier=assertImportSpecifier;exports.assertMetaProperty=assertMetaProperty;exports.assertClassMethod=assertClassMethod;exports.assertObjectPattern=assertObjectPattern;exports.assertSpreadElement=assertSpreadElement;exports.assertSuper=assertSuper;exports.assertTaggedTemplateExpression=assertTaggedTemplateExpression;exports.assertTemplateElement=assertTemplateElement;exports.assertTemplateLiteral=assertTemplateLiteral;exports.assertYieldExpression=assertYieldExpression;exports.assertAnyTypeAnnotation=assertAnyTypeAnnotation;exports.assertArrayTypeAnnotation=assertArrayTypeAnnotation;exports.assertBooleanTypeAnnotation=assertBooleanTypeAnnotation;exports.assertBooleanLiteralTypeAnnotation=assertBooleanLiteralTypeAnnotation;exports.assertNullLiteralTypeAnnotation=assertNullLiteralTypeAnnotation;exports.assertClassImplements=assertClassImplements;exports.assertDeclareClass=assertDeclareClass;exports.assertDeclareFunction=assertDeclareFunction;exports.assertDeclareInterface=assertDeclareInterface;exports.assertDeclareModule=assertDeclareModule;exports.assertDeclareModuleExports=assertDeclareModuleExports;exports.assertDeclareTypeAlias=assertDeclareTypeAlias;exports.assertDeclareOpaqueType=assertDeclareOpaqueType;exports.assertDeclareVariable=assertDeclareVariable;exports.assertDeclareExportDeclaration=assertDeclareExportDeclaration;exports.assertDeclareExportAllDeclaration=assertDeclareExportAllDeclaration;exports.assertDeclaredPredicate=assertDeclaredPredicate;exports.assertExistsTypeAnnotation=assertExistsTypeAnnotation;exports.assertFunctionTypeAnnotation=assertFunctionTypeAnnotation;exports.assertFunctionTypeParam=assertFunctionTypeParam;exports.assertGenericTypeAnnotation=assertGenericTypeAnnotation;exports.assertInferredPredicate=assertInferredPredicate;exports.assertInterfaceExtends=assertInterfaceExtends;exports.assertInterfaceDeclaration=assertInterfaceDeclaration;exports.assertInterfaceTypeAnnotation=assertInterfaceTypeAnnotation;exports.assertIntersectionTypeAnnotation=assertIntersectionTypeAnnotation;exports.assertMixedTypeAnnotation=assertMixedTypeAnnotation;exports.assertEmptyTypeAnnotation=assertEmptyTypeAnnotation;exports.assertNullableTypeAnnotation=assertNullableTypeAnnotation;exports.assertNumberLiteralTypeAnnotation=assertNumberLiteralTypeAnnotation;exports.assertNumberTypeAnnotation=assertNumberTypeAnnotation;exports.assertObjectTypeAnnotation=assertObjectTypeAnnotation;exports.assertObjectTypeInternalSlot=assertObjectTypeInternalSlot;exports.assertObjectTypeCallProperty=assertObjectTypeCallProperty;exports.assertObjectTypeIndexer=assertObjectTypeIndexer;exports.assertObjectTypeProperty=assertObjectTypeProperty;exports.assertObjectTypeSpreadProperty=assertObjectTypeSpreadProperty;exports.assertOpaqueType=assertOpaqueType;exports.assertQualifiedTypeIdentifier=assertQualifiedTypeIdentifier;exports.assertStringLiteralTypeAnnotation=assertStringLiteralTypeAnnotation;exports.assertStringTypeAnnotation=assertStringTypeAnnotation;exports.assertThisTypeAnnotation=assertThisTypeAnnotation;exports.assertTupleTypeAnnotation=assertTupleTypeAnnotation;exports.assertTypeofTypeAnnotation=assertTypeofTypeAnnotation;exports.assertTypeAlias=assertTypeAlias;exports.assertTypeAnnotation=assertTypeAnnotation;exports.assertTypeCastExpression=assertTypeCastExpression;exports.assertTypeParameter=assertTypeParameter;exports.assertTypeParameterDeclaration=assertTypeParameterDeclaration;exports.assertTypeParameterInstantiation=assertTypeParameterInstantiation;exports.assertUnionTypeAnnotation=assertUnionTypeAnnotation;exports.assertVariance=assertVariance;exports.assertVoidTypeAnnotation=assertVoidTypeAnnotation;exports.assertJSXAttribute=assertJSXAttribute;exports.assertJSXClosingElement=assertJSXClosingElement;exports.assertJSXElement=assertJSXElement;exports.assertJSXEmptyExpression=assertJSXEmptyExpression;exports.assertJSXExpressionContainer=assertJSXExpressionContainer;exports.assertJSXSpreadChild=assertJSXSpreadChild;exports.assertJSXIdentifier=assertJSXIdentifier;exports.assertJSXMemberExpression=assertJSXMemberExpression;exports.assertJSXNamespacedName=assertJSXNamespacedName;exports.assertJSXOpeningElement=assertJSXOpeningElement;exports.assertJSXSpreadAttribute=assertJSXSpreadAttribute;exports.assertJSXText=assertJSXText;exports.assertJSXFragment=assertJSXFragment;exports.assertJSXOpeningFragment=assertJSXOpeningFragment;exports.assertJSXClosingFragment=assertJSXClosingFragment;exports.assertNoop=assertNoop;exports.assertPlaceholder=assertPlaceholder;exports.assertArgumentPlaceholder=assertArgumentPlaceholder;exports.assertAwaitExpression=assertAwaitExpression;exports.assertBindExpression=assertBindExpression;exports.assertClassProperty=assertClassProperty;exports.assertOptionalMemberExpression=assertOptionalMemberExpression;exports.assertPipelineTopicExpression=assertPipelineTopicExpression;exports.assertPipelineBareFunction=assertPipelineBareFunction;exports.assertPipelinePrimaryTopicReference=assertPipelinePrimaryTopicReference;exports.assertOptionalCallExpression=assertOptionalCallExpression;exports.assertClassPrivateProperty=assertClassPrivateProperty;exports.assertClassPrivateMethod=assertClassPrivateMethod;exports.assertImport=assertImport;exports.assertDecorator=assertDecorator;exports.assertDoExpression=assertDoExpression;exports.assertExportDefaultSpecifier=assertExportDefaultSpecifier;exports.assertExportNamespaceSpecifier=assertExportNamespaceSpecifier;exports.assertPrivateName=assertPrivateName;exports.assertBigIntLiteral=assertBigIntLiteral;exports.assertTSParameterProperty=assertTSParameterProperty;exports.assertTSDeclareFunction=assertTSDeclareFunction;exports.assertTSDeclareMethod=assertTSDeclareMethod;exports.assertTSQualifiedName=assertTSQualifiedName;exports.assertTSCallSignatureDeclaration=assertTSCallSignatureDeclaration;exports.assertTSConstructSignatureDeclaration=assertTSConstructSignatureDeclaration;exports.assertTSPropertySignature=assertTSPropertySignature;exports.assertTSMethodSignature=assertTSMethodSignature;exports.assertTSIndexSignature=assertTSIndexSignature;exports.assertTSAnyKeyword=assertTSAnyKeyword;exports.assertTSUnknownKeyword=assertTSUnknownKeyword;exports.assertTSNumberKeyword=assertTSNumberKeyword;exports.assertTSObjectKeyword=assertTSObjectKeyword;exports.assertTSBooleanKeyword=assertTSBooleanKeyword;exports.assertTSStringKeyword=assertTSStringKeyword;exports.assertTSSymbolKeyword=assertTSSymbolKeyword;exports.assertTSVoidKeyword=assertTSVoidKeyword;exports.assertTSUndefinedKeyword=assertTSUndefinedKeyword;exports.assertTSNullKeyword=assertTSNullKeyword;exports.assertTSNeverKeyword=assertTSNeverKeyword;exports.assertTSThisType=assertTSThisType;exports.assertTSFunctionType=assertTSFunctionType;exports.assertTSConstructorType=assertTSConstructorType;exports.assertTSTypeReference=assertTSTypeReference;exports.assertTSTypePredicate=assertTSTypePredicate;exports.assertTSTypeQuery=assertTSTypeQuery;exports.assertTSTypeLiteral=assertTSTypeLiteral;exports.assertTSArrayType=assertTSArrayType;exports.assertTSTupleType=assertTSTupleType;exports.assertTSOptionalType=assertTSOptionalType;exports.assertTSRestType=assertTSRestType;exports.assertTSUnionType=assertTSUnionType;exports.assertTSIntersectionType=assertTSIntersectionType;exports.assertTSConditionalType=assertTSConditionalType;exports.assertTSInferType=assertTSInferType;exports.assertTSParenthesizedType=assertTSParenthesizedType;exports.assertTSTypeOperator=assertTSTypeOperator;exports.assertTSIndexedAccessType=assertTSIndexedAccessType;exports.assertTSMappedType=assertTSMappedType;exports.assertTSLiteralType=assertTSLiteralType;exports.assertTSExpressionWithTypeArguments=assertTSExpressionWithTypeArguments;exports.assertTSInterfaceDeclaration=assertTSInterfaceDeclaration;exports.assertTSInterfaceBody=assertTSInterfaceBody;exports.assertTSTypeAliasDeclaration=assertTSTypeAliasDeclaration;exports.assertTSAsExpression=assertTSAsExpression;exports.assertTSTypeAssertion=assertTSTypeAssertion;exports.assertTSEnumDeclaration=assertTSEnumDeclaration;exports.assertTSEnumMember=assertTSEnumMember;exports.assertTSModuleDeclaration=assertTSModuleDeclaration;exports.assertTSModuleBlock=assertTSModuleBlock;exports.assertTSImportType=assertTSImportType;exports.assertTSImportEqualsDeclaration=assertTSImportEqualsDeclaration;exports.assertTSExternalModuleReference=assertTSExternalModuleReference;exports.assertTSNonNullExpression=assertTSNonNullExpression;exports.assertTSExportAssignment=assertTSExportAssignment;exports.assertTSNamespaceExportDeclaration=assertTSNamespaceExportDeclaration;exports.assertTSTypeAnnotation=assertTSTypeAnnotation;exports.assertTSTypeParameterInstantiation=assertTSTypeParameterInstantiation;exports.assertTSTypeParameterDeclaration=assertTSTypeParameterDeclaration;exports.assertTSTypeParameter=assertTSTypeParameter;exports.assertExpression=assertExpression;exports.assertBinary=assertBinary;exports.assertScopable=assertScopable;exports.assertBlockParent=assertBlockParent;exports.assertBlock=assertBlock;exports.assertStatement=assertStatement;exports.assertTerminatorless=assertTerminatorless;exports.assertCompletionStatement=assertCompletionStatement;exports.assertConditional=assertConditional;exports.assertLoop=assertLoop;exports.assertWhile=assertWhile;exports.assertExpressionWrapper=assertExpressionWrapper;exports.assertFor=assertFor;exports.assertForXStatement=assertForXStatement;exports.assertFunction=assertFunction;exports.assertFunctionParent=assertFunctionParent;exports.assertPureish=assertPureish;exports.assertDeclaration=assertDeclaration;exports.assertPatternLike=assertPatternLike;exports.assertLVal=assertLVal;exports.assertTSEntityName=assertTSEntityName;exports.assertLiteral=assertLiteral;exports.assertImmutable=assertImmutable;exports.assertUserWhitespacable=assertUserWhitespacable;exports.assertMethod=assertMethod;exports.assertObjectMember=assertObjectMember;exports.assertProperty=assertProperty;exports.assertUnaryLike=assertUnaryLike;exports.assertPattern=assertPattern;exports.assertClass=assertClass;exports.assertModuleDeclaration=assertModuleDeclaration;exports.assertExportDeclaration=assertExportDeclaration;exports.assertModuleSpecifier=assertModuleSpecifier;exports.assertFlow=assertFlow;exports.assertFlowType=assertFlowType;exports.assertFlowBaseAnnotation=assertFlowBaseAnnotation;exports.assertFlowDeclaration=assertFlowDeclaration;exports.assertFlowPredicate=assertFlowPredicate;exports.assertJSX=assertJSX;exports.assertPrivate=assertPrivate;exports.assertTSTypeElement=assertTSTypeElement;exports.assertTSType=assertTSType;exports.assertNumberLiteral=assertNumberLiteral;exports.assertRegexLiteral=assertRegexLiteral;exports.assertRestProperty=assertRestProperty;exports.assertSpreadProperty=assertSpreadProperty;var _is=_interopRequireDefault(__webpack_require__(379));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function assert(type,node,opts){if(!(0,_is.default)(type,node,opts)){throw new Error("Expected type \"".concat(type,"\" with option ").concat(JSON.stringify(opts),", but instead got \"").concat(node.type,"\"."));}}function assertArrayExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ArrayExpression",node,opts);}function assertAssignmentExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("AssignmentExpression",node,opts);}function assertBinaryExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BinaryExpression",node,opts);}function assertInterpreterDirective(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("InterpreterDirective",node,opts);}function assertDirective(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Directive",node,opts);}function assertDirectiveLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DirectiveLiteral",node,opts);}function assertBlockStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BlockStatement",node,opts);}function assertBreakStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BreakStatement",node,opts);}function assertCallExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("CallExpression",node,opts);}function assertCatchClause(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("CatchClause",node,opts);}function assertConditionalExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ConditionalExpression",node,opts);}function assertContinueStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ContinueStatement",node,opts);}function assertDebuggerStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DebuggerStatement",node,opts);}function assertDoWhileStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DoWhileStatement",node,opts);}function assertEmptyStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("EmptyStatement",node,opts);}function assertExpressionStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExpressionStatement",node,opts);}function assertFile(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("File",node,opts);}function assertForInStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ForInStatement",node,opts);}function assertForStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ForStatement",node,opts);}function assertFunctionDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FunctionDeclaration",node,opts);}function assertFunctionExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FunctionExpression",node,opts);}function assertIdentifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Identifier",node,opts);}function assertIfStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("IfStatement",node,opts);}function assertLabeledStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("LabeledStatement",node,opts);}function assertStringLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("StringLiteral",node,opts);}function assertNumericLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NumericLiteral",node,opts);}function assertNullLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NullLiteral",node,opts);}function assertBooleanLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BooleanLiteral",node,opts);}function assertRegExpLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("RegExpLiteral",node,opts);}function assertLogicalExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("LogicalExpression",node,opts);}function assertMemberExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("MemberExpression",node,opts);}function assertNewExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NewExpression",node,opts);}function assertProgram(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Program",node,opts);}function assertObjectExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectExpression",node,opts);}function assertObjectMethod(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectMethod",node,opts);}function assertObjectProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectProperty",node,opts);}function assertRestElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("RestElement",node,opts);}function assertReturnStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ReturnStatement",node,opts);}function assertSequenceExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("SequenceExpression",node,opts);}function assertParenthesizedExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ParenthesizedExpression",node,opts);}function assertSwitchCase(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("SwitchCase",node,opts);}function assertSwitchStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("SwitchStatement",node,opts);}function assertThisExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ThisExpression",node,opts);}function assertThrowStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ThrowStatement",node,opts);}function assertTryStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TryStatement",node,opts);}function assertUnaryExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("UnaryExpression",node,opts);}function assertUpdateExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("UpdateExpression",node,opts);}function assertVariableDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("VariableDeclaration",node,opts);}function assertVariableDeclarator(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("VariableDeclarator",node,opts);}function assertWhileStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("WhileStatement",node,opts);}function assertWithStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("WithStatement",node,opts);}function assertAssignmentPattern(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("AssignmentPattern",node,opts);}function assertArrayPattern(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ArrayPattern",node,opts);}function assertArrowFunctionExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ArrowFunctionExpression",node,opts);}function assertClassBody(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassBody",node,opts);}function assertClassDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassDeclaration",node,opts);}function assertClassExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassExpression",node,opts);}function assertExportAllDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportAllDeclaration",node,opts);}function assertExportDefaultDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportDefaultDeclaration",node,opts);}function assertExportNamedDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportNamedDeclaration",node,opts);}function assertExportSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportSpecifier",node,opts);}function assertForOfStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ForOfStatement",node,opts);}function assertImportDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ImportDeclaration",node,opts);}function assertImportDefaultSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ImportDefaultSpecifier",node,opts);}function assertImportNamespaceSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ImportNamespaceSpecifier",node,opts);}function assertImportSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ImportSpecifier",node,opts);}function assertMetaProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("MetaProperty",node,opts);}function assertClassMethod(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassMethod",node,opts);}function assertObjectPattern(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectPattern",node,opts);}function assertSpreadElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("SpreadElement",node,opts);}function assertSuper(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Super",node,opts);}function assertTaggedTemplateExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TaggedTemplateExpression",node,opts);}function assertTemplateElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TemplateElement",node,opts);}function assertTemplateLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TemplateLiteral",node,opts);}function assertYieldExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("YieldExpression",node,opts);}function assertAnyTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("AnyTypeAnnotation",node,opts);}function assertArrayTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ArrayTypeAnnotation",node,opts);}function assertBooleanTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BooleanTypeAnnotation",node,opts);}function assertBooleanLiteralTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BooleanLiteralTypeAnnotation",node,opts);}function assertNullLiteralTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NullLiteralTypeAnnotation",node,opts);}function assertClassImplements(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassImplements",node,opts);}function assertDeclareClass(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareClass",node,opts);}function assertDeclareFunction(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareFunction",node,opts);}function assertDeclareInterface(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareInterface",node,opts);}function assertDeclareModule(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareModule",node,opts);}function assertDeclareModuleExports(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareModuleExports",node,opts);}function assertDeclareTypeAlias(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareTypeAlias",node,opts);}function assertDeclareOpaqueType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareOpaqueType",node,opts);}function assertDeclareVariable(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareVariable",node,opts);}function assertDeclareExportDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareExportDeclaration",node,opts);}function assertDeclareExportAllDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclareExportAllDeclaration",node,opts);}function assertDeclaredPredicate(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DeclaredPredicate",node,opts);}function assertExistsTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExistsTypeAnnotation",node,opts);}function assertFunctionTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FunctionTypeAnnotation",node,opts);}function assertFunctionTypeParam(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FunctionTypeParam",node,opts);}function assertGenericTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("GenericTypeAnnotation",node,opts);}function assertInferredPredicate(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("InferredPredicate",node,opts);}function assertInterfaceExtends(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("InterfaceExtends",node,opts);}function assertInterfaceDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("InterfaceDeclaration",node,opts);}function assertInterfaceTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("InterfaceTypeAnnotation",node,opts);}function assertIntersectionTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("IntersectionTypeAnnotation",node,opts);}function assertMixedTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("MixedTypeAnnotation",node,opts);}function assertEmptyTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("EmptyTypeAnnotation",node,opts);}function assertNullableTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NullableTypeAnnotation",node,opts);}function assertNumberLiteralTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NumberLiteralTypeAnnotation",node,opts);}function assertNumberTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("NumberTypeAnnotation",node,opts);}function assertObjectTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeAnnotation",node,opts);}function assertObjectTypeInternalSlot(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeInternalSlot",node,opts);}function assertObjectTypeCallProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeCallProperty",node,opts);}function assertObjectTypeIndexer(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeIndexer",node,opts);}function assertObjectTypeProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeProperty",node,opts);}function assertObjectTypeSpreadProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectTypeSpreadProperty",node,opts);}function assertOpaqueType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("OpaqueType",node,opts);}function assertQualifiedTypeIdentifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("QualifiedTypeIdentifier",node,opts);}function assertStringLiteralTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("StringLiteralTypeAnnotation",node,opts);}function assertStringTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("StringTypeAnnotation",node,opts);}function assertThisTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ThisTypeAnnotation",node,opts);}function assertTupleTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TupleTypeAnnotation",node,opts);}function assertTypeofTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeofTypeAnnotation",node,opts);}function assertTypeAlias(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeAlias",node,opts);}function assertTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeAnnotation",node,opts);}function assertTypeCastExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeCastExpression",node,opts);}function assertTypeParameter(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeParameter",node,opts);}function assertTypeParameterDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeParameterDeclaration",node,opts);}function assertTypeParameterInstantiation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TypeParameterInstantiation",node,opts);}function assertUnionTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("UnionTypeAnnotation",node,opts);}function assertVariance(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Variance",node,opts);}function assertVoidTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("VoidTypeAnnotation",node,opts);}function assertJSXAttribute(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXAttribute",node,opts);}function assertJSXClosingElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXClosingElement",node,opts);}function assertJSXElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXElement",node,opts);}function assertJSXEmptyExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXEmptyExpression",node,opts);}function assertJSXExpressionContainer(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXExpressionContainer",node,opts);}function assertJSXSpreadChild(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXSpreadChild",node,opts);}function assertJSXIdentifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXIdentifier",node,opts);}function assertJSXMemberExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXMemberExpression",node,opts);}function assertJSXNamespacedName(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXNamespacedName",node,opts);}function assertJSXOpeningElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXOpeningElement",node,opts);}function assertJSXSpreadAttribute(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXSpreadAttribute",node,opts);}function assertJSXText(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXText",node,opts);}function assertJSXFragment(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXFragment",node,opts);}function assertJSXOpeningFragment(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXOpeningFragment",node,opts);}function assertJSXClosingFragment(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSXClosingFragment",node,opts);}function assertNoop(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Noop",node,opts);}function assertPlaceholder(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Placeholder",node,opts);}function assertArgumentPlaceholder(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ArgumentPlaceholder",node,opts);}function assertAwaitExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("AwaitExpression",node,opts);}function assertBindExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BindExpression",node,opts);}function assertClassProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassProperty",node,opts);}function assertOptionalMemberExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("OptionalMemberExpression",node,opts);}function assertPipelineTopicExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("PipelineTopicExpression",node,opts);}function assertPipelineBareFunction(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("PipelineBareFunction",node,opts);}function assertPipelinePrimaryTopicReference(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("PipelinePrimaryTopicReference",node,opts);}function assertOptionalCallExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("OptionalCallExpression",node,opts);}function assertClassPrivateProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassPrivateProperty",node,opts);}function assertClassPrivateMethod(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ClassPrivateMethod",node,opts);}function assertImport(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Import",node,opts);}function assertDecorator(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Decorator",node,opts);}function assertDoExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("DoExpression",node,opts);}function assertExportDefaultSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportDefaultSpecifier",node,opts);}function assertExportNamespaceSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportNamespaceSpecifier",node,opts);}function assertPrivateName(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("PrivateName",node,opts);}function assertBigIntLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BigIntLiteral",node,opts);}function assertTSParameterProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSParameterProperty",node,opts);}function assertTSDeclareFunction(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSDeclareFunction",node,opts);}function assertTSDeclareMethod(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSDeclareMethod",node,opts);}function assertTSQualifiedName(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSQualifiedName",node,opts);}function assertTSCallSignatureDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSCallSignatureDeclaration",node,opts);}function assertTSConstructSignatureDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSConstructSignatureDeclaration",node,opts);}function assertTSPropertySignature(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSPropertySignature",node,opts);}function assertTSMethodSignature(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSMethodSignature",node,opts);}function assertTSIndexSignature(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSIndexSignature",node,opts);}function assertTSAnyKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSAnyKeyword",node,opts);}function assertTSUnknownKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSUnknownKeyword",node,opts);}function assertTSNumberKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSNumberKeyword",node,opts);}function assertTSObjectKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSObjectKeyword",node,opts);}function assertTSBooleanKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSBooleanKeyword",node,opts);}function assertTSStringKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSStringKeyword",node,opts);}function assertTSSymbolKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSSymbolKeyword",node,opts);}function assertTSVoidKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSVoidKeyword",node,opts);}function assertTSUndefinedKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSUndefinedKeyword",node,opts);}function assertTSNullKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSNullKeyword",node,opts);}function assertTSNeverKeyword(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSNeverKeyword",node,opts);}function assertTSThisType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSThisType",node,opts);}function assertTSFunctionType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSFunctionType",node,opts);}function assertTSConstructorType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSConstructorType",node,opts);}function assertTSTypeReference(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeReference",node,opts);}function assertTSTypePredicate(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypePredicate",node,opts);}function assertTSTypeQuery(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeQuery",node,opts);}function assertTSTypeLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeLiteral",node,opts);}function assertTSArrayType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSArrayType",node,opts);}function assertTSTupleType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTupleType",node,opts);}function assertTSOptionalType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSOptionalType",node,opts);}function assertTSRestType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSRestType",node,opts);}function assertTSUnionType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSUnionType",node,opts);}function assertTSIntersectionType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSIntersectionType",node,opts);}function assertTSConditionalType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSConditionalType",node,opts);}function assertTSInferType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSInferType",node,opts);}function assertTSParenthesizedType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSParenthesizedType",node,opts);}function assertTSTypeOperator(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeOperator",node,opts);}function assertTSIndexedAccessType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSIndexedAccessType",node,opts);}function assertTSMappedType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSMappedType",node,opts);}function assertTSLiteralType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSLiteralType",node,opts);}function assertTSExpressionWithTypeArguments(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSExpressionWithTypeArguments",node,opts);}function assertTSInterfaceDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSInterfaceDeclaration",node,opts);}function assertTSInterfaceBody(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSInterfaceBody",node,opts);}function assertTSTypeAliasDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeAliasDeclaration",node,opts);}function assertTSAsExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSAsExpression",node,opts);}function assertTSTypeAssertion(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeAssertion",node,opts);}function assertTSEnumDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSEnumDeclaration",node,opts);}function assertTSEnumMember(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSEnumMember",node,opts);}function assertTSModuleDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSModuleDeclaration",node,opts);}function assertTSModuleBlock(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSModuleBlock",node,opts);}function assertTSImportType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSImportType",node,opts);}function assertTSImportEqualsDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSImportEqualsDeclaration",node,opts);}function assertTSExternalModuleReference(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSExternalModuleReference",node,opts);}function assertTSNonNullExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSNonNullExpression",node,opts);}function assertTSExportAssignment(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSExportAssignment",node,opts);}function assertTSNamespaceExportDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSNamespaceExportDeclaration",node,opts);}function assertTSTypeAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeAnnotation",node,opts);}function assertTSTypeParameterInstantiation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeParameterInstantiation",node,opts);}function assertTSTypeParameterDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeParameterDeclaration",node,opts);}function assertTSTypeParameter(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeParameter",node,opts);}function assertExpression(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Expression",node,opts);}function assertBinary(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Binary",node,opts);}function assertScopable(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Scopable",node,opts);}function assertBlockParent(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("BlockParent",node,opts);}function assertBlock(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Block",node,opts);}function assertStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Statement",node,opts);}function assertTerminatorless(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Terminatorless",node,opts);}function assertCompletionStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("CompletionStatement",node,opts);}function assertConditional(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Conditional",node,opts);}function assertLoop(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Loop",node,opts);}function assertWhile(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("While",node,opts);}function assertExpressionWrapper(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExpressionWrapper",node,opts);}function assertFor(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("For",node,opts);}function assertForXStatement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ForXStatement",node,opts);}function assertFunction(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Function",node,opts);}function assertFunctionParent(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FunctionParent",node,opts);}function assertPureish(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Pureish",node,opts);}function assertDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Declaration",node,opts);}function assertPatternLike(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("PatternLike",node,opts);}function assertLVal(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("LVal",node,opts);}function assertTSEntityName(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSEntityName",node,opts);}function assertLiteral(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Literal",node,opts);}function assertImmutable(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Immutable",node,opts);}function assertUserWhitespacable(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("UserWhitespacable",node,opts);}function assertMethod(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Method",node,opts);}function assertObjectMember(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ObjectMember",node,opts);}function assertProperty(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Property",node,opts);}function assertUnaryLike(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("UnaryLike",node,opts);}function assertPattern(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Pattern",node,opts);}function assertClass(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Class",node,opts);}function assertModuleDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ModuleDeclaration",node,opts);}function assertExportDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ExportDeclaration",node,opts);}function assertModuleSpecifier(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("ModuleSpecifier",node,opts);}function assertFlow(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Flow",node,opts);}function assertFlowType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FlowType",node,opts);}function assertFlowBaseAnnotation(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FlowBaseAnnotation",node,opts);}function assertFlowDeclaration(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FlowDeclaration",node,opts);}function assertFlowPredicate(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("FlowPredicate",node,opts);}function assertJSX(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("JSX",node,opts);}function assertPrivate(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("Private",node,opts);}function assertTSTypeElement(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSTypeElement",node,opts);}function assertTSType(node){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};assert("TSType",node,opts);}function assertNumberLiteral(node,opts){console.trace("The node type NumberLiteral has been renamed to NumericLiteral");assert("NumberLiteral",node,opts);}function assertRegexLiteral(node,opts){console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");assert("RegexLiteral",node,opts);}function assertRestProperty(node,opts){console.trace("The node type RestProperty has been renamed to RestElement");assert("RestProperty",node,opts);}function assertSpreadProperty(node,opts){console.trace("The node type SpreadProperty has been renamed to SpreadElement");assert("SpreadProperty",node,opts);}

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=createTypeAnnotationBasedOnTypeof;var _generated=__webpack_require__(343);function createTypeAnnotationBasedOnTypeof(type){if(type==="string"){return(0,_generated.stringTypeAnnotation)();}else if(type==="number"){return(0,_generated.numberTypeAnnotation)();}else if(type==="undefined"){return(0,_generated.voidTypeAnnotation)();}else if(type==="boolean"){return(0,_generated.booleanTypeAnnotation)();}else if(type==="function"){return(0,_generated.genericTypeAnnotation)((0,_generated.identifier)("Function"));}else if(type==="object"){return(0,_generated.genericTypeAnnotation)((0,_generated.identifier)("Object"));}else if(type==="symbol"){return(0,_generated.genericTypeAnnotation)((0,_generated.identifier)("Symbol"));}else{throw new Error("Invalid typeof value");}}

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=createUnionTypeAnnotation;var _generated=__webpack_require__(343);var _removeTypeDuplicates=_interopRequireDefault(__webpack_require__(417));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function createUnionTypeAnnotation(types){var flattened=(0,_removeTypeDuplicates.default)(types);if(flattened.length===1){return flattened[0];}else{return(0,_generated.unionTypeAnnotation)(flattened);}}

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=cloneDeep;var _cloneNode=_interopRequireDefault(__webpack_require__(355));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function cloneDeep(node){return(0,_cloneNode.default)(node);}

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=cloneWithoutLoc;var _clone=_interopRequireDefault(__webpack_require__(418));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function cloneWithoutLoc(node){var newNode=(0,_clone.default)(node);newNode.loc=null;return newNode;}

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=addComment;var _addComments=_interopRequireDefault(__webpack_require__(419));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function addComment(node,type,content,line){return(0,_addComments.default)(node,type,[{type:line?"CommentLine":"CommentBlock",value:content}]);}

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq=__webpack_require__(560);/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */function uniq(array){return array&&array.length?baseUniq(array):[];}module.exports=uniq;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache=__webpack_require__(561),arrayIncludes=__webpack_require__(564),arrayIncludesWith=__webpack_require__(569),cacheHas=__webpack_require__(570),createSet=__webpack_require__(571),setToArray=__webpack_require__(421);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}module.exports=baseUniq;

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache=__webpack_require__(398),setCacheAdd=__webpack_require__(562),setCacheHas=__webpack_require__(563);/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;

/***/ }),
/* 562 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;

/***/ }),
/* 563 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf=__webpack_require__(565);/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}module.exports=arrayIncludes;

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex=__webpack_require__(566),baseIsNaN=__webpack_require__(567),strictIndexOf=__webpack_require__(568);/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}module.exports=baseIndexOf;

/***/ }),
/* 566 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}module.exports=baseFindIndex;

/***/ }),
/* 567 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}module.exports=baseIsNaN;

/***/ }),
/* 568 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=strictIndexOf;

/***/ }),
/* 569 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}module.exports=arrayIncludesWith;

/***/ }),
/* 570 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

var Set=__webpack_require__(411),noop=__webpack_require__(572),setToArray=__webpack_require__(421);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};module.exports=createSet;

/***/ }),
/* 572 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */function noop(){// No operation performed.
}module.exports=noop;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=removeComments;var _constants=__webpack_require__(350);function removeComments(node){_constants.COMMENT_KEYS.forEach(function(key){node[key]=null;});return node;}

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.TSTYPE_TYPES=exports.TSTYPEELEMENT_TYPES=exports.PRIVATE_TYPES=exports.JSX_TYPES=exports.FLOWPREDICATE_TYPES=exports.FLOWDECLARATION_TYPES=exports.FLOWBASEANNOTATION_TYPES=exports.FLOWTYPE_TYPES=exports.FLOW_TYPES=exports.MODULESPECIFIER_TYPES=exports.EXPORTDECLARATION_TYPES=exports.MODULEDECLARATION_TYPES=exports.CLASS_TYPES=exports.PATTERN_TYPES=exports.UNARYLIKE_TYPES=exports.PROPERTY_TYPES=exports.OBJECTMEMBER_TYPES=exports.METHOD_TYPES=exports.USERWHITESPACABLE_TYPES=exports.IMMUTABLE_TYPES=exports.LITERAL_TYPES=exports.TSENTITYNAME_TYPES=exports.LVAL_TYPES=exports.PATTERNLIKE_TYPES=exports.DECLARATION_TYPES=exports.PUREISH_TYPES=exports.FUNCTIONPARENT_TYPES=exports.FUNCTION_TYPES=exports.FORXSTATEMENT_TYPES=exports.FOR_TYPES=exports.EXPRESSIONWRAPPER_TYPES=exports.WHILE_TYPES=exports.LOOP_TYPES=exports.CONDITIONAL_TYPES=exports.COMPLETIONSTATEMENT_TYPES=exports.TERMINATORLESS_TYPES=exports.STATEMENT_TYPES=exports.BLOCK_TYPES=exports.BLOCKPARENT_TYPES=exports.SCOPABLE_TYPES=exports.BINARY_TYPES=exports.EXPRESSION_TYPES=void 0;var _definitions=__webpack_require__(341);var EXPRESSION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Expression"];exports.EXPRESSION_TYPES=EXPRESSION_TYPES;var BINARY_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Binary"];exports.BINARY_TYPES=BINARY_TYPES;var SCOPABLE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Scopable"];exports.SCOPABLE_TYPES=SCOPABLE_TYPES;var BLOCKPARENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["BlockParent"];exports.BLOCKPARENT_TYPES=BLOCKPARENT_TYPES;var BLOCK_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Block"];exports.BLOCK_TYPES=BLOCK_TYPES;var STATEMENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Statement"];exports.STATEMENT_TYPES=STATEMENT_TYPES;var TERMINATORLESS_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];exports.TERMINATORLESS_TYPES=TERMINATORLESS_TYPES;var COMPLETIONSTATEMENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];exports.COMPLETIONSTATEMENT_TYPES=COMPLETIONSTATEMENT_TYPES;var CONDITIONAL_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Conditional"];exports.CONDITIONAL_TYPES=CONDITIONAL_TYPES;var LOOP_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Loop"];exports.LOOP_TYPES=LOOP_TYPES;var WHILE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["While"];exports.WHILE_TYPES=WHILE_TYPES;var EXPRESSIONWRAPPER_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];exports.EXPRESSIONWRAPPER_TYPES=EXPRESSIONWRAPPER_TYPES;var FOR_TYPES=_definitions.FLIPPED_ALIAS_KEYS["For"];exports.FOR_TYPES=FOR_TYPES;var FORXSTATEMENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];exports.FORXSTATEMENT_TYPES=FORXSTATEMENT_TYPES;var FUNCTION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Function"];exports.FUNCTION_TYPES=FUNCTION_TYPES;var FUNCTIONPARENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];exports.FUNCTIONPARENT_TYPES=FUNCTIONPARENT_TYPES;var PUREISH_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Pureish"];exports.PUREISH_TYPES=PUREISH_TYPES;var DECLARATION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Declaration"];exports.DECLARATION_TYPES=DECLARATION_TYPES;var PATTERNLIKE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["PatternLike"];exports.PATTERNLIKE_TYPES=PATTERNLIKE_TYPES;var LVAL_TYPES=_definitions.FLIPPED_ALIAS_KEYS["LVal"];exports.LVAL_TYPES=LVAL_TYPES;var TSENTITYNAME_TYPES=_definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];exports.TSENTITYNAME_TYPES=TSENTITYNAME_TYPES;var LITERAL_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Literal"];exports.LITERAL_TYPES=LITERAL_TYPES;var IMMUTABLE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Immutable"];exports.IMMUTABLE_TYPES=IMMUTABLE_TYPES;var USERWHITESPACABLE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];exports.USERWHITESPACABLE_TYPES=USERWHITESPACABLE_TYPES;var METHOD_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Method"];exports.METHOD_TYPES=METHOD_TYPES;var OBJECTMEMBER_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];exports.OBJECTMEMBER_TYPES=OBJECTMEMBER_TYPES;var PROPERTY_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Property"];exports.PROPERTY_TYPES=PROPERTY_TYPES;var UNARYLIKE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];exports.UNARYLIKE_TYPES=UNARYLIKE_TYPES;var PATTERN_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Pattern"];exports.PATTERN_TYPES=PATTERN_TYPES;var CLASS_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Class"];exports.CLASS_TYPES=CLASS_TYPES;var MODULEDECLARATION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];exports.MODULEDECLARATION_TYPES=MODULEDECLARATION_TYPES;var EXPORTDECLARATION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];exports.EXPORTDECLARATION_TYPES=EXPORTDECLARATION_TYPES;var MODULESPECIFIER_TYPES=_definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];exports.MODULESPECIFIER_TYPES=MODULESPECIFIER_TYPES;var FLOW_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Flow"];exports.FLOW_TYPES=FLOW_TYPES;var FLOWTYPE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["FlowType"];exports.FLOWTYPE_TYPES=FLOWTYPE_TYPES;var FLOWBASEANNOTATION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];exports.FLOWBASEANNOTATION_TYPES=FLOWBASEANNOTATION_TYPES;var FLOWDECLARATION_TYPES=_definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];exports.FLOWDECLARATION_TYPES=FLOWDECLARATION_TYPES;var FLOWPREDICATE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];exports.FLOWPREDICATE_TYPES=FLOWPREDICATE_TYPES;var JSX_TYPES=_definitions.FLIPPED_ALIAS_KEYS["JSX"];exports.JSX_TYPES=JSX_TYPES;var PRIVATE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["Private"];exports.PRIVATE_TYPES=PRIVATE_TYPES;var TSTYPEELEMENT_TYPES=_definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];exports.TSTYPEELEMENT_TYPES=TSTYPEELEMENT_TYPES;var TSTYPE_TYPES=_definitions.FLIPPED_ALIAS_KEYS["TSType"];exports.TSTYPE_TYPES=TSTYPE_TYPES;

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=ensureBlock;var _toBlock=_interopRequireDefault(__webpack_require__(425));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function ensureBlock(node){var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"body";return node[key]=(0,_toBlock.default)(node[key],node);}

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toBindingIdentifierName;var _toIdentifier=_interopRequireDefault(__webpack_require__(426));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function toBindingIdentifierName(name){name=(0,_toIdentifier.default)(name);if(name==="eval"||name==="arguments")name="_"+name;return name;}

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toComputedKey;var _generated=__webpack_require__(340);var _generated2=__webpack_require__(343);function toComputedKey(node){var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:node.key||node.property;if(!node.computed&&(0,_generated.isIdentifier)(key))key=(0,_generated2.stringLiteral)(key.name);return key;}

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toExpression;var _generated=__webpack_require__(340);function toExpression(node){if((0,_generated.isExpressionStatement)(node)){node=node.expression;}if((0,_generated.isExpression)(node)){return node;}if((0,_generated.isClass)(node)){node.type="ClassExpression";}else if((0,_generated.isFunction)(node)){node.type="FunctionExpression";}if(!(0,_generated.isExpression)(node)){throw new Error("cannot turn ".concat(node.type," to an expression"));}return node;}

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toKeyAlias;var _generated=__webpack_require__(340);var _cloneNode=_interopRequireDefault(__webpack_require__(355));var _removePropertiesDeep=_interopRequireDefault(__webpack_require__(427));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function toKeyAlias(node){var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:node.key;var alias;if(node.kind==="method"){return toKeyAlias.increment()+"";}else if((0,_generated.isIdentifier)(key)){alias=key.name;}else if((0,_generated.isStringLiteral)(key)){alias=JSON.stringify(key.value);}else{alias=JSON.stringify((0,_removePropertiesDeep.default)((0,_cloneNode.default)(key)));}if(node.computed){alias="[".concat(alias,"]");}if(node.static){alias="static:".concat(alias);}return alias;}toKeyAlias.uid=0;toKeyAlias.increment=function(){if(toKeyAlias.uid>=Number.MAX_SAFE_INTEGER){return toKeyAlias.uid=0;}else{return toKeyAlias.uid++;}};

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toSequenceExpression;var _gatherSequenceExpressions=_interopRequireDefault(__webpack_require__(581));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function toSequenceExpression(nodes,scope){if(!nodes||!nodes.length)return;var declars=[];var result=(0,_gatherSequenceExpressions.default)(nodes,scope,declars);if(!result)return;for(var _i=0,_declars=declars;_i<_declars.length;_i++){var declar=_declars[_i];scope.push(declar);}return result;}

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=gatherSequenceExpressions;var _getBindingIdentifiers=_interopRequireDefault(__webpack_require__(364));var _generated=__webpack_require__(340);var _generated2=__webpack_require__(343);var _cloneNode=_interopRequireDefault(__webpack_require__(355));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function gatherSequenceExpressions(nodes,scope,declars){var exprs=[];var ensureLastUndefined=true;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=nodes[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var node=_step.value;ensureLastUndefined=false;if((0,_generated.isExpression)(node)){exprs.push(node);}else if((0,_generated.isExpressionStatement)(node)){exprs.push(node.expression);}else if((0,_generated.isVariableDeclaration)(node)){if(node.kind!=="var")return;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=node.declarations[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var declar=_step2.value;var bindings=(0,_getBindingIdentifiers.default)(declar);for(var _i=0,_Object$keys=Object.keys(bindings);_i<_Object$keys.length;_i++){var key=_Object$keys[_i];declars.push({kind:node.kind,id:(0,_cloneNode.default)(bindings[key])});}if(declar.init){exprs.push((0,_generated2.assignmentExpression)("=",declar.id,declar.init));}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}ensureLastUndefined=true;}else if((0,_generated.isIfStatement)(node)){var consequent=node.consequent?gatherSequenceExpressions([node.consequent],scope,declars):scope.buildUndefinedNode();var alternate=node.alternate?gatherSequenceExpressions([node.alternate],scope,declars):scope.buildUndefinedNode();if(!consequent||!alternate)return;exprs.push((0,_generated2.conditionalExpression)(node.test,consequent,alternate));}else if((0,_generated.isBlockStatement)(node)){var body=gatherSequenceExpressions(node.body,scope,declars);if(!body)return;exprs.push(body);}else if((0,_generated.isEmptyStatement)(node)){ensureLastUndefined=true;}else{return;}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}if(ensureLastUndefined){exprs.push(scope.buildUndefinedNode());}if(exprs.length===1){return exprs[0];}else{return(0,_generated2.sequenceExpression)(exprs);}}

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=toStatement;var _generated=__webpack_require__(340);var _generated2=__webpack_require__(343);function toStatement(node,ignore){if((0,_generated.isStatement)(node)){return node;}var mustHaveId=false;var newType;if((0,_generated.isClass)(node)){mustHaveId=true;newType="ClassDeclaration";}else if((0,_generated.isFunction)(node)){mustHaveId=true;newType="FunctionDeclaration";}else if((0,_generated.isAssignmentExpression)(node)){return(0,_generated2.expressionStatement)(node);}if(mustHaveId&&!node.id){newType=false;}if(!newType){if(ignore){return false;}else{throw new Error("cannot turn ".concat(node.type," to a statement"));}}node.type=newType;return node;}

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=valueToNode;function _isPlainObject(){var data=_interopRequireDefault(__webpack_require__(584));_isPlainObject=function _isPlainObject(){return data;};return data;}function _isRegExp(){var data=_interopRequireDefault(__webpack_require__(585));_isRegExp=function _isRegExp(){return data;};return data;}var _isValidIdentifier=_interopRequireDefault(__webpack_require__(354));var _generated=__webpack_require__(343);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function valueToNode(value){if(value===undefined){return(0,_generated.identifier)("undefined");}if(value===true||value===false){return(0,_generated.booleanLiteral)(value);}if(value===null){return(0,_generated.nullLiteral)();}if(typeof value==="string"){return(0,_generated.stringLiteral)(value);}if(typeof value==="number"){var result;if(Number.isFinite(value)){result=(0,_generated.numericLiteral)(Math.abs(value));}else{var numerator;if(Number.isNaN(value)){numerator=(0,_generated.numericLiteral)(0);}else{numerator=(0,_generated.numericLiteral)(1);}result=(0,_generated.binaryExpression)("/",numerator,(0,_generated.numericLiteral)(0));}if(value<0||Object.is(value,-0)){result=(0,_generated.unaryExpression)("-",result);}return result;}if((0,_isRegExp().default)(value)){var pattern=value.source;var flags=value.toString().match(/\/([a-z]+|)$/)[1];return(0,_generated.regExpLiteral)(pattern,flags);}if(Array.isArray(value)){return(0,_generated.arrayExpression)(value.map(valueToNode));}if((0,_isPlainObject().default)(value)){var props=[];for(var _i=0,_Object$keys=Object.keys(value);_i<_Object$keys.length;_i++){var key=_Object$keys[_i];var nodeKey=void 0;if((0,_isValidIdentifier.default)(key)){nodeKey=(0,_generated.identifier)(key);}else{nodeKey=(0,_generated.stringLiteral)(key);}props.push((0,_generated.objectProperty)(nodeKey,valueToNode(value[key])));}return(0,_generated.objectExpression)(props);}throw new Error("don't know how to turn this value into a node");}

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(351),getPrototype=__webpack_require__(375),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var objectTag='[object Object]';/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp=__webpack_require__(586),baseUnary=__webpack_require__(362),nodeUtil=__webpack_require__(363);/* Node.js helper references. */var nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp;/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;module.exports=isRegExp;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(351),isObjectLike=__webpack_require__(349);/** `Object#toString` result references. */var regexpTag='[object RegExp]';/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}module.exports=baseIsRegExp;

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=appendToMemberExpression;var _generated=__webpack_require__(343);function appendToMemberExpression(member,append){var computed=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;member.object=(0,_generated.memberExpression)(member.object,member.property,member.computed);member.property=append;member.computed=!!computed;return member;}

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=inherits;var _constants=__webpack_require__(350);var _inheritsComments=_interopRequireDefault(__webpack_require__(423));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function inherits(child,parent){if(!child||!parent)return child;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=_constants.INHERIT_KEYS.optional[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;if(child[key]==null){child[key]=parent[key];}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}for(var _i=0,_Object$keys=Object.keys(parent);_i<_Object$keys.length;_i++){var _key=_Object$keys[_i];if(_key[0]==="_"&&_key!=="__clone")child[_key]=parent[_key];}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=_constants.INHERIT_KEYS.force[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _key2=_step2.value;child[_key2]=parent[_key2];}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}(0,_inheritsComments.default)(child,parent);return child;}

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=prependToMemberExpression;var _generated=__webpack_require__(343);function prependToMemberExpression(member,prepend){member.object=(0,_generated.memberExpression)(prepend,member.object);return member;}

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=getOuterBindingIdentifiers;var _getBindingIdentifiers=_interopRequireDefault(__webpack_require__(364));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getOuterBindingIdentifiers(node,duplicates){return(0,_getBindingIdentifiers.default)(node,duplicates,true);}

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=traverse;var _definitions=__webpack_require__(341);function traverse(node,handlers,state){if(typeof handlers==="function"){handlers={enter:handlers};}var _handlers=handlers,enter=_handlers.enter,exit=_handlers.exit;traverseSimpleImpl(node,enter,exit,state,[]);}function traverseSimpleImpl(node,enter,exit,state,ancestors){var keys=_definitions.VISITOR_KEYS[node.type];if(!keys)return;if(enter)enter(node,ancestors,state);var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=keys[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;var subNode=node[key];if(Array.isArray(subNode)){for(var i=0;i<subNode.length;i++){var child=subNode[i];if(!child)continue;ancestors.push({node:node,key:key,index:i});traverseSimpleImpl(child,enter,exit,state,ancestors);ancestors.pop();}}else if(subNode){ancestors.push({node:node,key:key});traverseSimpleImpl(subNode,enter,exit,state,ancestors);ancestors.pop();}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}if(exit)exit(node,ancestors,state);}

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isBinding;var _getBindingIdentifiers=_interopRequireDefault(__webpack_require__(364));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isBinding(node,parent,grandparent){if(grandparent&&node.type==="Identifier"&&parent.type==="ObjectProperty"&&grandparent.type==="ObjectExpression"){return false;}var keys=_getBindingIdentifiers.default.keys[parent.type];if(keys){for(var i=0;i<keys.length;i++){var key=keys[i];var val=parent[key];if(Array.isArray(val)){if(val.indexOf(node)>=0)return true;}else{if(val===node)return true;}}}return false;}

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isBlockScoped;var _generated=__webpack_require__(340);var _isLet=_interopRequireDefault(__webpack_require__(430));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isBlockScoped(node){return(0,_generated.isFunctionDeclaration)(node)||(0,_generated.isClassDeclaration)(node)||(0,_isLet.default)(node);}

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isImmutable;var _isType=_interopRequireDefault(__webpack_require__(380));var _generated=__webpack_require__(340);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isImmutable(node){if((0,_isType.default)(node.type,"Immutable"))return true;if((0,_generated.isIdentifier)(node)){if(node.name==="undefined"){return true;}else{return false;}}return false;}

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.default=isNodesEquivalent;var _definitions=__webpack_require__(341);function isNodesEquivalent(a,b){if(_typeof(a)!=="object"||_typeof(b)!=="object"||a==null||b==null){return a===b;}if(a.type!==b.type){return false;}var fields=Object.keys(_definitions.NODE_FIELDS[a.type]||a.type);var visitorKeys=_definitions.VISITOR_KEYS[a.type];for(var _i=0,_fields=fields;_i<_fields.length;_i++){var field=_fields[_i];if(_typeof(a[field])!==_typeof(b[field])){return false;}if(a[field]==null&&b[field]==null){continue;}else if(a[field]==null||b[field]==null){return false;}if(Array.isArray(a[field])){if(!Array.isArray(b[field])){return false;}if(a[field].length!==b[field].length){return false;}for(var i=0;i<a[field].length;i++){if(!isNodesEquivalent(a[field][i],b[field][i])){return false;}}continue;}if(_typeof(a[field])==="object"&&(!visitorKeys||!visitorKeys.includes(field))){for(var _i2=0,_Object$keys=Object.keys(a[field]);_i2<_Object$keys.length;_i2++){var key=_Object$keys[_i2];if(a[field][key]!==b[field][key]){return false;}}continue;}if(!isNodesEquivalent(a[field],b[field])){return false;}}return true;}

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isReferenced;function isReferenced(node,parent,grandparent){switch(parent.type){case"MemberExpression":case"JSXMemberExpression":case"OptionalMemberExpression":if(parent.property===node){return!!parent.computed;}return parent.object===node;case"VariableDeclarator":return parent.init===node;case"ArrowFunctionExpression":return parent.body===node;case"ExportSpecifier":if(parent.source){return false;}return parent.local===node;case"PrivateName":return false;case"ObjectProperty":case"ClassProperty":case"ClassPrivateProperty":case"ClassMethod":case"ClassPrivateMethod":case"ObjectMethod":if(parent.key===node){return!!parent.computed;}if(parent.value===node){return!grandparent||grandparent.type!=="ObjectPattern";}return true;case"ClassDeclaration":case"ClassExpression":return parent.superClass===node;case"AssignmentExpression":return parent.right===node;case"AssignmentPattern":return parent.right===node;case"LabeledStatement":return false;case"CatchClause":return false;case"RestElement":return false;case"BreakStatement":case"ContinueStatement":return false;case"FunctionDeclaration":case"FunctionExpression":return false;case"ExportNamespaceSpecifier":case"ExportDefaultSpecifier":return false;case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":return false;case"JSXAttribute":return false;case"ObjectPattern":case"ArrayPattern":return false;case"MetaProperty":return false;case"ObjectTypeProperty":return parent.key!==node;case"TSEnumMember":return parent.id!==node;case"TSPropertySignature":if(parent.key===node){return!!parent.computed;}return true;}return true;}

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isScope;var _generated=__webpack_require__(340);function isScope(node,parent){if((0,_generated.isBlockStatement)(node)&&(0,_generated.isFunction)(parent,{body:node})){return false;}if((0,_generated.isBlockStatement)(node)&&(0,_generated.isCatchClause)(parent,{body:node})){return false;}return(0,_generated.isScopable)(node);}

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isSpecifierDefault;var _generated=__webpack_require__(340);function isSpecifierDefault(specifier){return(0,_generated.isImportDefaultSpecifier)(specifier)||(0,_generated.isIdentifier)(specifier.imported||specifier.exported,{name:"default"});}

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isValidES3Identifier;var _isValidIdentifier=_interopRequireDefault(__webpack_require__(354));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var RESERVED_WORDS_ES3_ONLY=new Set(["abstract","boolean","byte","char","double","enum","final","float","goto","implements","int","interface","long","native","package","private","protected","public","short","static","synchronized","throws","transient","volatile"]);function isValidES3Identifier(name){return(0,_isValidIdentifier.default)(name)&&!RESERVED_WORDS_ES3_ONLY.has(name);}

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=isVar;var _generated=__webpack_require__(340);var _constants=__webpack_require__(350);function isVar(node){return(0,_generated.isVariableDeclaration)(node,{kind:"var"})&&!node[_constants.BLOCK_SCOPED_SYMBOL];}

/***/ })
])]);