



















































































































































// import React, { useState } from "react";
// import styled from "styled-components";
// import { ReactComponent as Setting } from "assets/images/setting_wheel.svg";
// import { ReactComponent as Expand } from "assets/images/expand_vertical.svg";
// import { ReactComponent as Add } from "assets/images/collapse_add.svg";
// import { ReactComponent as Prioritize } from "assets/images/prioritize.svg";
// import { ReactComponent as Life } from "assets/images/life_vector.svg";
// import { ReactComponent as Options } from "assets/images/option_icon.svg";
// import { ReactComponent as GreenTip } from "assets/images/green_tip.svg";
// import { ReactComponent as PrioritizeVertical } from "assets/images/vertical_prioritize.svg";
// import { Collapse, Select } from "antd";
// import { useSelector } from "react-redux";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const { Panel } = Collapse;

// const PriorityNav = () => {
//   const [activeKey, setActiveKey] = useState(null);

//   const handleCollapse = (key) => {
//     setActiveKey(key);
//   };

//   const handleAddClick = () => {
//     alert("Add icon clicked");
//   };

//   const handlePrioritizeClick = () => {
//     alert("Prioritize icon clicked");
//   };
//   const handleOptions = () => {
//     alert("Option icon clicked");
//   };
//   const getPopupContainer = (triggerNode) => triggerNode.parentNode;
//   const { selectedGoalAction } = useSelector((state) => state.globalReducer);
//   const onParentDragEnd = (result) => {
//     console.log(result);
//   };
//   const onNestedDragEnd = (result) => {
//     console.log(result);
//   };
//   const getItemStyle = (isDragging, draggableStyle) => {
//     let copyDraggableStyle = draggableStyle;
//     copyDraggableStyle.position = isDragging && "fixed";
//     return {
//       userSelect: "none",
//       background: "#102339",
//       ...copyDraggableStyle,
//     };
//   };

//   const getListStyle = (isDraggingOver) => ({});
//   return (
//     <MainContainer>
//       <Head>
//         <div>
//           <Heading white>PRIORITIES</Heading>
//         </div>
//         <IconWrapper>
//           <Icon>
//             <Setting />
//           </Icon>
//           <Icon>
//             <Expand />
//           </Icon>
//         </IconWrapper>
//       </Head>
//       <PriorityItemContainer>
//         <DragDropContext onDragEnd={onParentDragEnd}>
//           <Droppable droppableId="goal-actions-list">
//             {(provided, snapshot) => (
//               <div
//                 className="characters"
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 style={getListStyle(snapshot.isDraggingOver)}
//               >
//                 {Array(4)
//                   .fill()
//                   .map((goalAction, index) => (
//                     <Draggable
//                       key={goalAction}
//                       draggableId={`${"goal-action"}-${index}}`}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={getItemStyle(
//                             snapshot.isDragging,
//                             provided.draggableProps.style
//                           )}
//                         >
//                           <Collapse
//                             className="parent-collapse"
//                             activeKey={activeKey}
//                             onChange={handleCollapse}
//                           >
//                             <Panel
//                               header={
//                                 <ParentCollapse
//                                   onClick={(e) => e.stopPropagation()}
//                                 >
//                                   <Heading white>GOALS</Heading>
//                                   <CollapseActions>
//                                     <Icon onClick={handleAddClick}>
//                                       <Add />
//                                     </Icon>
//                                     <Icon onClick={handlePrioritizeClick}>
//                                       <Prioritize />
//                                     </Icon>
//                                   </CollapseActions>
//                                 </ParentCollapse>
//                               }
//                               key={index}
//                             >
//                               <Collapse
//                                 className="child-collapse"
//                                 defaultActiveKey="1"
//                               >
//                                 <Panel
//                                   header={
//                                     <NestedCollapse
//                                       onClick={(e) => e.stopPropagation()}
//                                     >
//                                       <Heading grey className="d-flex ">
//                                         <Icon className="me-2">
//                                           <Life />
//                                         </Icon>
//                                         LIFE
//                                       </Heading>
//                                       <CollapseActions>
//                                         <Icon onClick={handleOptions}>
//                                           <Options />
//                                         </Icon>
//                                       </CollapseActions>
//                                     </NestedCollapse>
//                                   }
//                                   key={index}
//                                 >
//                                   <Collapse className="nested-collapse">
//                                     <Panel
//                                       header={
//                                         <NestedCollapse
//                                           onClick={(e) => e.stopPropagation()}
//                                         >
//                                           <Heading
//                                             nested
//                                             white
//                                             className="d-flex "
//                                           >
//                                             <Index>1</Index>
//                                             <Icon sm className="mx-2">
//                                               <GreenTip />
//                                             </Icon>
//                                             Health
//                                             <span>&nbsp; {">"} Sleep</span>
//                                           </Heading>
//                                           <CollapseActions>
//                                             <Icon onClick={handleOptions}>
//                                               <Options />
//                                             </Icon>
//                                           </CollapseActions>
//                                         </NestedCollapse>
//                                       }
//                                       key={index}
//                                     >
//                                       <DragDropContext
//                                         onDragEnd={onParentDragEnd}
//                                       >
//                                         <Droppable droppableId="goal-actions-list-nested">
//                                           {(provided, snapshot) => (
//                                             <div
//                                               className="characters-nested"
//                                               {...provided.droppableProps}
//                                               ref={provided.innerRef}
//                                               style={getListStyle(
//                                                 snapshot.isDraggingOver
//                                               )}
//                                             >
//                                               {Array(4)
//                                                 .fill()
//                                                 .map((goalAction, index) => (
//                                                   <Draggable
//                                                     key={goalAction}
//                                                     draggableId={`${"goal-action"}-${index}}`}
//                                                     index={index}
//                                                   >
//                                                     {(provided, snapshot) => (
//                                                       <div
//                                                         ref={provided.innerRef}
//                                                         {...provided.draggableProps}
//                                                         {...provided.dragHandleProps}
//                                                         style={getItemStyle(
//                                                           snapshot.isDragging,
//                                                           provided
//                                                             .draggableProps
//                                                             .style
//                                                         )}
//                                                       >
//                                                         <GoalAction>
//                                                           <Actions>
//                                                             <Index>1</Index>
//                                                             <SubHeading
//                                                               className="mx-2"
//                                                               sm
//                                                             >
//                                                               Sleep 8 hours
//                                                               enjoying
//                                                             </SubHeading>
//                                                             <GoalsHeading>
//                                                               Habit
//                                                             </GoalsHeading>
//                                                             <Icon
//                                                               onClick={
//                                                                 handlePrioritizeClick
//                                                               }
//                                                             >
//                                                               <PrioritizeVertical />
//                                                             </Icon>
//                                                           </Actions>
//                                                         </GoalAction>
//                                                       </div>
//                                                     )}
//                                                   </Draggable>
//                                                 ))}
//                                               {provided.placeholder}
//                                             </div>
//                                           )}
//                                         </Droppable>
//                                       </DragDropContext>
//                                     </Panel>
//                                   </Collapse>
//                                 </Panel>
//                               </Collapse>
//                             </Panel>
//                           </Collapse>
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>

//         <Collapse
//           className="parent-collapse"
//           activeKey={activeKey}
//           onChange={handleCollapse}
//         >
//           <Panel
//             header={
//               <ParentCollapse onClick={(e) => e.stopPropagation()}>
//                 <Heading white>TOP DECISIONS</Heading>
//                 <CollapseActions>
//                   <Icon onClick={handleAddClick}>
//                     <Add />
//                   </Icon>
//                   <Icon onClick={handlePrioritizeClick}>
//                     <Prioritize />
//                   </Icon>
//                 </CollapseActions>
//               </ParentCollapse>
//             }
//             key="2"
//           >
//             <SelectWrapper>
//               <GoalActionWrapper>
//                 <GoalAction width={"100%"}>
//                   <Actions width={"100%"}>
//                     <Index>1</Index>
//                     <SubHeading width={"50%"} className="mx-2" sm>
//                       Buy a House
//                     </SubHeading>
//                     <GoalsHeading>22/03/2023</GoalsHeading>
//                     <Icon onClick={handlePrioritizeClick}>
//                       <PrioritizeVertical />
//                     </Icon>
//                   </Actions>
//                 </GoalAction>
//                 <GoalAction width={"100%"}>
//                   <Actions width={"100%"}>
//                     <Index>2</Index>
//                     <SubHeading width={"50%"} className="mx-2" sm>
//                       Top Fund Manager Branch
//                     </SubHeading>
//                     <GoalsHeading>22/03/2023</GoalsHeading>
//                     <Icon onClick={handlePrioritizeClick}>
//                       <PrioritizeVertical />
//                     </Icon>
//                   </Actions>
//                 </GoalAction>
//               </GoalActionWrapper>

//               <PriorityDropdown>
//                 <span style={{ marginRight: "8px" }}>1.</span>
//                 <Select
//                   getPopupContainer={getPopupContainer}
//                   popupClassName="select_priority"
//                   className="priority_select"
//                   showSearch
//                   placeholder="Choose From Decisions"
//                   optionFilterProp="children"
//                   filterOption={(input, option) =>
//                     (option?.label ?? "").includes(input)
//                   }
//                   filterSort={(optionA, optionB) =>
//                     (optionA?.label ?? "")
//                       .toLowerCase()
//                       .localeCompare((optionB?.label ?? "").toLowerCase())
//                   }
//                   options={[
//                     {
//                       value: "1",
//                       label: "Not Identified",
//                     },
//                     {
//                       value: "2",
//                       label: "Closed",
//                     },
//                     {
//                       value: "3",
//                       label: "Communicated",
//                     },
//                     {
//                       value: "4",
//                       label: "Identified",
//                     },
//                     {
//                       value: "5",
//                       label: "Resolved",
//                     },
//                     {
//                       value: "6",
//                       label: "Cancelled",
//                     },
//                   ]}
//                 />
//               </PriorityDropdown>
//               <PriorityDropdown>
//                 <span style={{ marginRight: "8px" }}>2.</span>
//                 <Select
//                   getPopupContainer={getPopupContainer}
//                   popupClassName="select_priority"
//                   className="priority_select"
//                   showSearch
//                   placeholder="Choose From Decisions"
//                   optionFilterProp="children"
//                   filterOption={(input, option) =>
//                     (option?.label ?? "").includes(input)
//                   }
//                   filterSort={(optionA, optionB) =>
//                     (optionA?.label ?? "")
//                       .toLowerCase()
//                       .localeCompare((optionB?.label ?? "").toLowerCase())
//                   }
//                   options={[
//                     {
//                       value: "1",
//                       label: "Not Identified",
//                     },
//                     {
//                       value: "2",
//                       label: "Closed",
//                     },
//                     {
//                       value: "3",
//                       label: "Communicated",
//                     },
//                     {
//                       value: "4",
//                       label: "Identified",
//                     },
//                     {
//                       value: "5",
//                       label: "Resolved",
//                     },
//                     {
//                       value: "6",
//                       label: "Cancelled",
//                     },
//                   ]}
//                 />
//               </PriorityDropdown>
//             </SelectWrapper>
//           </Panel>
//         </Collapse>
//       </PriorityItemContainer>
//     </MainContainer>
//   );
// };

// export default PriorityNav;
